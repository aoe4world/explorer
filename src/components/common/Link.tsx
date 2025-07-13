import { Component, JSX } from 'solid-js';
import { AnchorProps, Link as LinkBase } from "@solidjs/router";

export type LinkType = 'none' | 'self' | 'blank';

export interface LinkProps extends AnchorProps {
  linkType?: LinkType;
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
      <LinkBase {...props} target={target}>
        {props.children}
      </LinkBase>
    );
  }
};
