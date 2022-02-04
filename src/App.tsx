import { Link, RouteDefinition, useLocation, useNavigate, useRoutes } from "solid-app-router";
import { Component, createEffect, ErrorBoundary } from "solid-js";
import { Toolbar } from "./components/Toolbar";
import { Nav } from "./components/Nav";
import { CivDetailRoute } from "./routes/civs/[slug]";
import { UnitOverviewRoute } from "./routes/units/units";
import { UnitDetailRoute } from "./routes/units/[id]";
import { CivOverviewRoute } from "./routes/civs/civs";

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
    path: "/units",
    component: () => UnitOverviewRoute,
  },
  {
    path: "/units/:id",
    component: () => UnitDetailRoute,
  },
];

const navItems: [href: string, label: string][] = [
  ["/civs", "Civs"],
  ["/units/", "All units"],
];

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <>
      <Nav items={navItems}></Nav>

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
              <div class="bg-red-500 text-white p-4">
                <div>Something went terribly wrong `{err.toString()}`</div>
                <button onClick={() => retry()} class="bg-white text-red-900 p-1 rounded-lg">
                  Retry
                </button>
              </div>
            </div>
          );
        }}
      >
        <Routes />
      </ErrorBoundary>

      <div class="max-w-screen-lg p-4 mb-5 mx-auto text-sm text-gray-300">
        Age Of Empires 4 © Microsoft Corporation. Aoe4world Explorer was created under Microsoft's "
        <a href="https://www.xbox.com/en-US/developers/rules" target="_blank" class="text-gray-200">
          Game Content Usage Rules
        </a>
        " using assets from Age Of Empires 4, and it is not endorsed by or affiliated with Microsoft.
      </div>
    </>
  );
};

export default App;
