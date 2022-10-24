import { Component, JSX, splitProps } from "solid-js";

export const ItemIcon: Component<JSX.ImgHTMLAttributes<any> & { url: string }> = (props) => {
  const [local, imgProps] = splitProps(props, ["url"]);
  return <img src={local.url} {...imgProps} />;
};
