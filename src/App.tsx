import { Link, RouteDefinition, useLocation, useNavigate, useRoutes } from "solid-app-router";
import { Component, createEffect, createSignal, ErrorBoundary, on } from "solid-js";
import { Toolbar } from "./components/Toolbar";
import { Nav } from "./components/Nav";
import { CivDetailRoute } from "./routes/civs/[slug]";
import { UnitOverviewRoute } from "./routes/units/units";
import { UnitDetailRoute } from "./routes/units/[id]";
import { CivOverviewRoute } from "./routes/civs/civs";
import { Icon } from "./components/Icon";
import { BuildingOverviewRoute } from "./routes/buildings/buildings";
import { BuildingDetailRoute } from "./routes/buildings/[id]";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: () => {
      useNavigate()("/civs/");
      return null;
    },
  },
  {
    path: "/civs",
    component: () => CivOverviewRoute,
  },
  {
    path: "/civs/:slug",
    component: () => CivDetailRoute,
  },
  {
    path: "/civs/:slug/units/:id",
    component: () => UnitDetailRoute,
  },
  {
    path: "/civs/:slug/buildings/:id",
    component: () => BuildingDetailRoute,
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
];

export const [activePage, setActivePage] = createSignal<{ title?: string; description?: string; location: ReturnType<typeof useLocation> }>();
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
        <Routes />
      </ErrorBoundary>
    </>
  );
};

export default App;
