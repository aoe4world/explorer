import { PatchNotes } from "src/types/patches";

export const patches = Object.values(import.meta.glob('./patch-*.tsx', { eager: true })).map((module:any) => module.patch as PatchNotes || Object.values(module)[0] as PatchNotes).sort((a,b) => a.date.valueOf() - b.date.valueOf());
