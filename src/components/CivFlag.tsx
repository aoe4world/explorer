import { Component, ComponentProps, splitProps } from "solid-js";
import { CIVILIZATIONS, localizeCiv } from "../config";
import { FLAGS } from "../../assets";
import { civAbbr } from "../types/data";
import { currentLocale } from "../global";

export const CivFlag: Component<ComponentProps<"img"> & { abbr: civAbbr }> = (props) => {
  const [civ, rest] = splitProps(props, ["abbr"]);
  const slug = () => CIVILIZATIONS[civ.abbr].slug;
  const name = () => localizeCiv(CIVILIZATIONS[civ.abbr], currentLocale())?.name;
  return <img src={FLAGS[slug()]} alt={props.alt ?? name()} {...rest} />;
};
