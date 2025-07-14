import { Link, RouteDefinition, useLocation, useNavigate, useRoutes, useParams } from "@solidjs/router";
import { Component, createEffect, createSignal, ErrorBoundary, lazy, on, Show } from "solid-js";
import { Toolbar } from "./components/Toolbar";
import { Nav } from "./components/Nav";
import { CivDetailRoute } from "./routes/civs/[slug]";
import { UnitOverviewRoute } from "./routes/units/units";
import { UnitDetailRoute } from "./routes/units/[id]";
import { UnitVersusRoute } from "./routes/units/versus";
import { CivOverviewRoute } from "./routes/home";
import { Icon } from "./components/Icon";
import { BuildingOverviewRoute } from "./routes/buildings/buildings";
import { BuildingDetailRoute } from "./routes/buildings/[id]";
import { AboutRoute } from "./routes/about";
import { TechnologyDetailRoute } from "./routes/technologies/[id]";
import { TechnologoiesOverviewRoute } from "./routes/technologies/technologies";
import { civConfig, UnifiedItem } from "./types/data";
import { ITEMS, SIMILAIR_ITEMS } from "./config";
import { getItemHref } from "./components/Cards";
import { PatchDetailRoute } from "./routes/patches/[id]";
import { findClosestMatch } from "./query/utils";
import { SearchRoute } from "./routes/search";
import { PatchListRoute } from "./routes/patches";
import { SidebarNav } from "@components/SidebarNav";
import { hideNav } from "./global";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: () => CivOverviewRoute,
  },
  {
    path: "/civs",
    component: () => {
      useNavigate()("/");
      return null;
    },
  },
  {
    path: "/civs/:slug",
    component: () => CivDetailRoute,
  },
  {
    path: "/civs/:slug/units",
    component: () => UnitOverviewRoute,
  },
  {
    path: "/civs/:slug/units/:id",
    component: () => UnitDetailRoute,
  },
  {
    path: "/civs/:slug/units/:id/versus",
    component: () => {
      const params = useParams();
      const navigate = useNavigate();
      createEffect(() => {
        navigate(`/versus?civ1=${params.slug}&unit1=${params.id}`, { replace: true });
      });
      return null;
    },
  },
  {
    path: "/civs/:slug/units/:id/versus/:civ2/units/:id2",
    component: () => {
      const params = useParams();
      const navigate = useNavigate();
      createEffect(() => {
        navigate(`/versus?civ1=${params.slug}&unit1=${params.id}&civ2=${params.civ2}&unit2=${params.id2}`, { replace: true });
      });
      return null;
    },
  },
  {
    path: "/civs/:slug/buildings",
    component: () => BuildingOverviewRoute,
  },
  {
    path: "/civs/:slug/buildings/:id",
    component: () => BuildingDetailRoute,
  },
  {
    path: "/civs/:slug/technologies",
    component: () => TechnologoiesOverviewRoute,
  },
  {
    path: "/civs/:slug/technologies/:id",
    component: () => TechnologyDetailRoute,
  },
  {
    path: "/units",
    component: () => UnitOverviewRoute,
  },
  {
    path: "/units/:id",
    component: () => UnitDetailRoute,
  },
  {
    path: "/buildings",
    component: () => BuildingOverviewRoute,
  },
  {
    path: "/buildings/:id",
    component: () => BuildingDetailRoute,
  },
  {
    path: "/technologies",
    component: () => TechnologoiesOverviewRoute,
  },
  {
    path: "/technologies/:id",
    component: () => TechnologyDetailRoute,
  },
  {
    path: "/versus",
    component: () => UnitVersusRoute,
  },
  {
    path: "/about",
    component: () => AboutRoute,
  },
  {
    path: "/quiz",
    component: lazy(() => import("./routes/quiz/quiz")),
  },
  {
    path: "/quiz/twitch",
    component: lazy(() => import("./routes/quiz/twitch")),
  },
  {
    path: "/quiz/twitch/:channel",
    component: lazy(() => import("./routes/quiz/twitch")),
  },
  {
    path: "/patches/",
    component: () => PatchListRoute,
  },
  {
    path: "/patches/:id",
    component: () => PatchDetailRoute,
  },
  {
    path: "civs/:civ/patches/:id",
    component: () => PatchDetailRoute,
  },
  {
    path: "/search",
    component: () => SearchRoute,
  },
  {
    path: "/content",
    component: lazy(() => import("./routes/content/content")),
  },
];

export const [activePage, setActivePage] = createSignal<{ title?: string; description?: string; location: ReturnType<typeof useLocation> }>();

export const setActivePageForItem = (item: UnifiedItem, civ: civConfig) =>
  setActivePage({
    title: item.name + (civ?.name ? ` — ${civ?.name}` : ""),
    description: item.description,
    location: useLocation(),
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
const App: Component = () => {
  const Routes = useRoutes(routes);
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
        <div class="max-w-screen-2xl mx-auto flex">
          <Show when={!["hidden", "hide-sidebar"].includes(hideNav())}>
            <div class="w-full max-w-xs pl-8 hidden lg:block">
              <div class="p-4 mx-auto gap-4 mb-4 mt-10 sticky bottom-0 top-16 max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
                <SidebarNav />
              </div>
            </div>
          </Show>
          <div class="flex-auto">
            <Routes />
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
