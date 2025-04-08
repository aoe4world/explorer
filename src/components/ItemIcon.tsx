import { Component, JSX, splitProps } from "solid-js";

export const ItemIcon: Component<JSX.ImgHTMLAttributes<any> & { url: string }> = (props) => {
  const [local, imgProps] = splitProps(props, ["url"]);
  
  const useLocal = (import.meta.env.DEV || window.location.hostname.endsWith('pages.dev'));
  const inRuby = !!import.meta.env.VITE_RUBY_SOURCE_CODE_DIR;
  const url = useLocal ? local.url?.replace(/https?:\/\/[a-z0-9.]+\/images/, inRuby ? '/vite-dev/lib/explorer/data/images' : '') : local.url;

  return <img src={url} {...imgProps} />;
};
