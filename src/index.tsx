import "./index.css";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import App from "./App";
interface explorerOptions {
  /** The path at which the explorer is located */
  base?: string;
}

export function initializeExplorer(el: HTMLElement = document.getElementById("explorer"), options: explorerOptions = {}) {
  render(
    () => (
      <Router base={options.base}>
        <App />
      </Router>
    ),
    el
  );
}
