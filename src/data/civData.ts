import { civAbbr } from "../../data/.scripts/lib/types/civs";
import { CivInfo } from "../routes/civs/[slug]";

const civDataFiles = import.meta.glob(`./*.json`);
export const getCivData = (civ: civAbbr) => {
  return civDataFiles[`./${civ}.json`]() as Promise<CivInfo>;
};
