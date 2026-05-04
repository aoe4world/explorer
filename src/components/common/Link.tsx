import { Component, JSX, Show, splitProps } from 'solid-js';
import { A } from "@solidjs/router";

export type LinkType = 'none' | 'self' | 'blank';

export interface LinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  linkType?: LinkType;
  href?: string;
}

export const Link: Component<LinkProps> = (props) => {
  const [local, rest] =  splitProps(props, ['linkType', 'href', 'target', 'children']);
  const target = () => local.target || (local.linkType === 'blank' ? "_blank" : undefined);

  return (
    <Show when={local.linkType !== 'none' && local.href} fallback={local.children}>
      <A href={local.href!} target={target()} {...rest}>
        {local.children}
      </A>
    </Show>
  );
};
