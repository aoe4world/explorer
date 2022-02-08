import "./index.css";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import App, { activePage } from "./App";
import { createEffect, on } from "solid-js";
interface explorerOptions {
  /** The path at which the explorer is located */
  base?: string;
  /** Callback function to be used after each navigation */
  onNavigate?: (page: { title?: string; description?: string }) => void;
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
    createEffect(
      on(activePage, () => {
        options.onNavigate({ title: activePage().title, description: activePage().description });
      })
    );
  }
}
