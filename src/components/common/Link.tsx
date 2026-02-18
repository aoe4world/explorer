import { Component, JSX } from 'solid-js';
import { A } from "@solidjs/router";

export type LinkType = 'none' | 'self' | 'blank';

export interface LinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  linkType?: LinkType;
  href: string;
}

export const Link: Component<LinkProps> = ({linkType = 'self', target, ...props}) => {
  if (linkType === 'none') {
    return (
      <>
        {props.children}
      </>
    );
  } else {
    target ||= linkType === 'blank' ? "_blank" : undefined;
    return (
      <A {...props} target={target}>
        {props.children}
      </A>
    );
  }
};
