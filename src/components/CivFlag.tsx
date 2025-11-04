import { Component, ComponentProps, splitProps } from "solid-js";
import { CIVILIZATIONS } from "../config";
import { FLAGS } from "../../assets";
import { civAbbr } from "../types/data";

export const CivFlag: Component<ComponentProps<"img"> & { abbr: civAbbr }> = (props) => {
  const [civ, rest] = splitProps(props, ["abbr"]);
  const slug = CIVILIZATIONS[civ.abbr].slug;
  return <img src={FLAGS[slug]} {...rest} />;
};
