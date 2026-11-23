import { Component } from "solid-js";

const svgContent = (svg: string) => svg.replace(/^\s*<svg[^>]*>|<\/svg>\s*$/g, "");

/** Renders an icon from `@components/icons`. Sized at 1em so it scales with font-size, like the Font Awesome icons it replaced. */
export const Icon: Component<{ icon: string; class?: string }> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    class={`inline-block align-[-0.125em] shrink-0 ${props.class ?? ""}`}
    innerHTML={svgContent(props.icon)}
  />
);
