import { PatchNotes } from "src/types/patches";

export const patches = Object.values(import.meta.glob<{ patch: PatchNotes }>('./patch-*.tsx', { eager: true })).map((module) => module.patch).sort((a,b) => a.date.valueOf() - b.date.valueOf());
