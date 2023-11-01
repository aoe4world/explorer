import { useNavigate } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import { getItemHref } from "@components/Cards";
import { Icon } from "@components/Icon";
import { search, Search } from "@components/Search";
import { mainIntroductionCSSClass } from "../styles";

export const SearchRoute: Component = () => {
  const navigate = useNavigate();
  const [noResult, setNoResult] = createSignal<string>();
  const q = new URLSearchParams(window.location.search).get("q");
  if (q)
    search(q).then((i) => {
      const item = i?.[0]?.item;
      if (item) navigate(getItemHref(item));
      else setNoResult(q);
    });

  const searchUrl = new URL(window.location.href);
  searchUrl.search = "?q=";
  return (
    <div class="max-w-screen-lg p-4 mx-auto mb-4 mt-12">
      <h1 class="text-3xl font-bold text-white">
        <Icon icon="magnifying-glass" class="mr-4"></Icon>
        Quick Search
      </h1>
      {noResult() && (
        <div class="bg-red-900 text-white p-4 rounded-2xl my-10">
          <h1 class="text-2xl font-bold">
            <Icon icon="hexagon-exclamation" class="mr-3 mb-3" />
            No results for "{noResult()}"
          </h1>
          <p class="text-lg">Try searching for something else.</p>
        </div>
      )}

      <p class={mainIntroductionCSSClass}>Use this url to create a search shortcut to the explorer in Chrome or Firefox.</p>
      <input
        value={searchUrl.toString() + `%s`}
        readonly
        class="w-full bg-white/10 text-white p-2 rounded-md outline-none focus:outline-none focus:bg-white/20"
        onclick={(t) => (t.target as HTMLInputElement).select()}
      />
      <div class="flex gap-3 mt-6 text-size-l text-gray-100">
        <p>Learn how to add a site search short cut in</p>
        <a
          class="text-white hover:underline"
          target="_blank"
          href="https://support.google.com/chrome/answer/95426#:~:text=Add%2C%20edit%2C%20or%20remove%20site%20search%20shortcuts"
        >
          <i class="fab fa-chrome mr-2" /> Chrome
        </a>
        <a class="text-white hover:underline" target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/add-custom-search-engine/">
          <i class="fab fa-firefox mr-2" /> Firefox
        </a>
      </div>
    </div>
  );
};
