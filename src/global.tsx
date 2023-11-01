import { createSignal } from "solid-js";
import { civAbbr } from "./types/data";

export const [hideNav, setHideNav] = createSignal(false);
export const [globalAgeFilter, setGlobalAgeFilter] = createSignal(4);
export const [globalCivFilter, setGlobalCivsFilter] = createSignal<civAbbr>(null);
