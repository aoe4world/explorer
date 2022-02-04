import { Component, ComponentProps, splitProps } from "solid-js";
import { FLAGS } from "../../assets";
import { civAbbr } from "../types/data";

export const CivFlag: Component<ComponentProps<"img"> & { abbr: civAbbr }> = (props) => {
  const [civ, rest] = splitProps(props, ["abbr"]);
  return <img src={FLAGS[civ.abbr]} {...rest} />;
};
