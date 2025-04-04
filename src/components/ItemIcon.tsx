import { Component, JSX, splitProps } from "solid-js";

export const ItemIcon: Component<JSX.ImgHTMLAttributes<any> & { url: string }> = (props) => {
  const [local, imgProps] = splitProps(props, ["url"]);

  const url = (import.meta.env.DEV || window.location.hostname.endsWith('pages.dev')) ? local.url?.replace(/https?:\/\/[a-z0-9.]+\/images/, import.meta.env.VITE_RUBY_SOURCE_CODE_DIR ? '/explorer': '') : local.url;
  return <img src={url} {...imgProps} />;
};
