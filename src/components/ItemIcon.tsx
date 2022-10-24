import { Component, JSX, splitProps } from "solid-js";

export const ItemIcon: Component<JSX.ImgHTMLAttributes<any> & { url: string }> = (props) => {
  const [local, imgProps] = splitProps(props, ["url"]);

  const url = () =>
    import.meta.env.IMG_BASE_URL ? local.url?.replace("https://data.aoe4world.com/images/", import.meta.env.IMG_BASE_URL as string) : local.url;
  return <img src={url()} {...imgProps} />;
};
