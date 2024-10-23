import { JSX } from "solid-js/jsx-runtime";
import { civAbbr } from "./data";
export type PatchNotes = {
  id: string;
  season: number;
  type: "update" | "patch";
  name: string;
  date: Date;
  buildId?: number | string;
  officialUrl?: string;
  introduction: string;
  summary?: string;
  html?: JSX.Element;
  sections: PatchSection[];
};
export type PatchSection = {
  title?: string;
  subtitle?: string;
  description?: string;
  civs: civAbbr[];
  changes: PatchSet[];
  md?: string;
};

export type PatchSet = {
  title?: string;
  items: string[];
  civs: civAbbr[];
  diff: PatchLine[];
  note?: string;
};
export type PatchLine = ["nerf" | "buff" | "fix", string, civAbbr[]?];
