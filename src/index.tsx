import { Router, useLocation } from "@solidjs/router";
import { createEffect, on } from "solid-js";
import { render } from "solid-js/web";
import App, { activePage } from "./App";
import { AppRoutes } from "./routes";
import "./index.css";

interface explorerOptions {
  /** The path at which the explorer is located */
  base?: string;
  /** Callback function to be used after each navigation */
  onNavigate?: (page: { title?: string; description?: string; location: ReturnType<typeof useLocation> }) => void;
}

export function initializeExplorer(el: HTMLElement = document.getElementById("explorer"), options: explorerOptions = {}) {
  let routerEl: typeof Router | undefined; // eslint-disable-line no-unassigned-vars
  render(
    () => (
      <Router base={options.base} ref={routerEl} root={App}>
        <AppRoutes />
      </Router>
    ),
    el
  );

  if (options.onNavigate) {
    let lastPathname: string;
    createEffect(
      on(activePage, () => {
        if (lastPathname === activePage()?.location?.pathname) return;
        lastPathname = activePage()?.location?.pathname;
        options.onNavigate({ title: activePage().title, description: activePage().description, location: activePage().location });
      })
    );
  }
}
