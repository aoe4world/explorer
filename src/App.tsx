import { useLocation, useNavigate } from "@solidjs/router";
import { Component, createEffect, createSignal, ErrorBoundary, on, Show } from "solid-js";
import { Toolbar } from "./components/Toolbar";
import { Icon } from "./components/Icon";
import { civConfig, UnifiedItem } from "./types/data";
import { ITEMS } from "./config";
import { getItemHref } from "./components/Cards";
import { findClosestMatch } from "./query/utils";
import { SidebarNav } from "@components/SidebarNav";
import { hideNav } from "./global";
import { BackdropWrapper } from "./components/Backdrop";

export const [activePage, setActivePage] = createSignal<{ title?: string; description?: string; location: any }>();

export const setActivePageForItem = (item: UnifiedItem, civ: civConfig) =>
  setActivePage({
    title: item.name + (civ?.name ? ` — ${civ?.name}` : ""),
    description: item.description,
    location: { pathname: window.location.pathname },
  });

export async function tryRedirectToClosestMatch(type: ITEMS, id: string, civ: civConfig, fallback?: Function) {
  const navigate = useNavigate();
  const closestMatch = await findClosestMatch(type, id, civ);
  if (closestMatch) navigate(getItemHref(closestMatch, civ));
  else fallback();
}

let lastPathname: string;
createEffect(
  on(activePage, () => {
    if (lastPathname === activePage()?.location?.pathname) return;
    lastPathname = activePage()?.location?.pathname;
    document.title = activePage()?.title ? activePage().title + " – Explorer – AoE4 World" : "Explorer – AoE4 World";
    if (!document.querySelector("meta[name=description]")) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = activePage()?.description ?? "";
      document.head.appendChild(meta);
    } else document.querySelector("meta[name=description]")?.setAttribute("content", activePage()?.description ?? "");
  })
);
const App: Component<{ children?: any }> = (props) => {
  const location = useLocation();
  let resetFocusEl: HTMLDivElement;

  createEffect(() => {
    location.pathname;
    if (resetFocusEl) {
      resetFocusEl.focus({ preventScroll: true });
      if (resetFocusEl.getBoundingClientRect().top < 0) resetFocusEl.scrollIntoView();
    }
  });

  return (
    <>
      <div ref={resetFocusEl} class="outline-none" tabindex="-1"></div>
      <Toolbar></Toolbar>
      <ErrorBoundary
        fallback={(err, retry) => {
          const location = useLocation();
          let errPath = location.pathname;
          console.log(err);
          createEffect(() => {
            if (location.pathname != errPath) retry();
          });
          return (
            <div class="max-w-screen-lg p-4 mx-auto">
              <div class="bg-red-900 text-white p-4 rounded-2xl my-10">
                <h1 class="text-2xl font-bold">
                  <Icon icon="hexagon-exclamation" class="mr-3 mb-3" />
                  Problem while loading page
                </h1>
                <p class="max-w-prose my-5">
                  Something went terribly wrong. It's likely a bug (just like in the game) and possibly something else. If it persists, we'd really like to know
                  so we can fix it. You can report it and include the below error.
                </p>
                <pre class="font-code font-sm text-white/70 my-5">{err.toString()}</pre>
                <button onClick={() => retry()} class="bg-white text-red-900 py-2 px-4 font-bold rounded-lg">
                  <Icon icon="refresh" class="mr-m" /> Retry
                </button>
                <a
                  href="https://github.com/aoe4world/explorer/discussions/new?category=bugs-problems"
                  class="inline-block  ml-3 bg-white text-red-900 py-2 px-4 font-bold rounded-lg"
                >
                  <Icon icon="bug" class="mr-m" /> Report bug
                </a>
              </div>
            </div>
          );
        }}
      >
        <BackdropWrapper>
          <div class="max-w-screen-2xl mx-auto flex">
            <Show when={!["hidden", "hide-sidebar"].includes(hideNav())}>
              <div class="w-full max-w-xs pl-8 hidden lg:block">
                <div class="p-4 mx-auto gap-4 mb-4 mt-10 sticky bottom-0 top-24 max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
                  <SidebarNav />
                </div>
              </div>
            </Show>
            <div class="flex-auto">
              {props.children}
            </div>
          </div>
        </BackdropWrapper>
      </ErrorBoundary>
    </>
  );
};

export default App;
