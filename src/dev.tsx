import "./index.css";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import App, { routes } from "./App";
import { Nav } from "./components/Nav";
import { For, ParentComponent } from "solid-js";

const navItems: [href: string, label: string][] = [
  ["/civs", "Civs"],
  ["/units/", "Units"],
  ["/buildings/", "Buildings"],
  ["/technologies/", "Technologies"],
  ["/about/", "About"],
];
const DevRoot: ParentComponent = (props) => (
  <>
    <Nav items={navItems}></Nav>
    <App>{props.children}</App>
  </>
);

render(
  () => (
    <Router root={DevRoot}>
      <For each={routes}>{(route) => <Route path={route.path} component={route.component} />}</For>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
