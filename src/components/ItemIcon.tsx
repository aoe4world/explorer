import { Component, JSX, splitProps } from "solid-js";

export const ItemIcon: Component<JSX.ImgHTMLAttributes<any> & { url: string }> = (props) => {
  const [local, imgProps] = splitProps(props, ["url"]);

  const url = import.meta.env.DEV ? local.url?.replace(/https?:\/\/[a-z0-9.]+\/images/, '') : local.url;
  return <img src={url} {...imgProps} />;
};
