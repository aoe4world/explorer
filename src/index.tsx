import "./index.css";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { Path } from "@solidjs/router/dist/types";

import App, { activePage } from "./App";
import { createEffect, on } from "solid-js";

interface explorerOptions {
  /** The path at which the explorer is located */
  base?: string;
  /** Callback function to be used after each navigation */
  onNavigate?: (page: { title?: string; description?: string; location: Path }) => void;
}

export function initializeExplorer(el: HTMLElement = document.getElementById("explorer"), options: explorerOptions = {}) {
  let router: typeof Router;
  render(
    () => (
      <Router base={options.base} ref={router}>
        <App />
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
