import { Router } from "@solidjs/router";
import { ParentComponent } from "solid-js";
import { render } from "solid-js/web";
import App from "./App";
import { Nav } from "./components/Nav";
import "./index.css";
import { AppRoutes } from "./routes";

const navItems: [href: string, label: string][] = [
  ["/civs", "Civs"],
  ["/units/", "Units"],
  ["/buildings/", "Buildings"],
  ["/technologies/", "Technologies"],
  ["/about/", "About"],
];
const DevRoot: ParentComponent = (props) => (
  <>
    <Nav items={navItems} />
    <App>{props.children}</App>
  </>
);

render(
  () => (
    <Router root={DevRoot}>
      <AppRoutes />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
