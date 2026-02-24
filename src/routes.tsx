import { Route, useNavigate, useParams } from "@solidjs/router";
import { createEffect, For, lazy } from "solid-js";
import { CivDetailRoute } from "./routes/civs/[slug]";
import { UnitOverviewRoute } from "./routes/units/units";
import { UnitDetailRoute } from "./routes/units/[id]";
import { UnitVersusRoute } from "./routes/units/versus";
import { CivOverviewRoute } from "./routes/home";
import { BuildingOverviewRoute } from "./routes/buildings/buildings";
import { BuildingDetailRoute } from "./routes/buildings/[id]";
import { AboutRoute } from "./routes/about";
import { TechnologyDetailRoute } from "./routes/technologies/[id]";
import { TechnologiesOverviewRoute } from "./routes/technologies/technologies";
import { PatchDetailRoute } from "./routes/patches/[id]";
import { SearchRoute } from "./routes/search";
import { PatchListRoute } from "./routes/patches";
import { ContentOverviewRoute } from "./routes/content/content";

export const routes = [
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
    component: CivDetailRoute,
  },
  {
    path: "/civs/:slug/units",
    component: UnitOverviewRoute,
  },
  {
    path: "/civs/:slug/units/:id",
    component: UnitDetailRoute,
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
    component: BuildingOverviewRoute,
  },
  {
    path: "/civs/:slug/buildings/:id",
    component: BuildingDetailRoute,
  },
  {
    path: "/civs/:slug/technologies",
    component: TechnologiesOverviewRoute,
  },
  {
    path: "/civs/:slug/technologies/:id",
    component: TechnologyDetailRoute,
  },
  {
    path: "/units",
    component: UnitOverviewRoute,
  },
  {
    path: "/units/:id",
    component: UnitDetailRoute,
  },
  {
    path: "/buildings",
    component: BuildingOverviewRoute,
  },
  {
    path: "/buildings/:id",
    component: BuildingDetailRoute,
  },
  {
    path: "/technologies",
    component: TechnologiesOverviewRoute,
  },
  {
    path: "/technologies/:id",
    component: TechnologyDetailRoute,
  },
  {
    path: "/versus",
    component: UnitVersusRoute,
  },
  {
    path: "/about",
    component:AboutRoute,
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
    component: PatchListRoute,
  },
  {
    path: "/patches/:id",
    component: PatchDetailRoute,
  },
  {
    path: "/civs/:civ/patches/:id",
    component: PatchDetailRoute,
  },
  {
    path: "/search",
    component: SearchRoute,
  },
  {
    path: "/content",
    component: ContentOverviewRoute,
  },
];

export const AppRoutes = () => {
  return (
    <For each={routes}>
      {(route) => <Route path={route.path} component={route.component} />}
    </For>
  );
};
