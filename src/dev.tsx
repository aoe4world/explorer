import "./index.css";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import App from "./App";
import { Nav } from "./components/Nav";

const navItems: [href: string, label: string][] = [
  ["/civs", "Civs"],
  ["/units/", "Units"],
  ["/buildings/", "Buildings"],
  ["/about/", "About"],
];
render(
  () => (
    <Router>
      <Nav items={navItems}></Nav>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
