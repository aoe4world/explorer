import { JSX } from "solid-js/jsx-runtime";
import { civAbbr } from "./data";
export type PatchNotes = {
  id: string;
  name: string;
  date: string;
  summary: string;
  html?: JSX.Element;
  sections: PatchSection[];
};
export type PatchSection = {
  title?: string;
  subtitle?: string;
  description?: string;
  civs: civAbbr[];
  changes: PatchSet[];
};

export type PatchSet = {
  title?: string;
  items: string[];
  civs: civAbbr[];
  diff: PatchLine[];
};
export type PatchLine = ["nerf" | "buff" | "fix", string, civAbbr[]?];
