import { onCleanup, onMount } from "solid-js";
import { CIVILIZATION_BY_SLUG } from "../../config";

export const DLC_CIVS = [
  CIVILIZATION_BY_SLUG.byzantines,
  CIVILIZATION_BY_SLUG.japanese,
  CIVILIZATION_BY_SLUG.orderofthedragon,
  CIVILIZATION_BY_SLUG.zhuxi,
  CIVILIZATION_BY_SLUG.ayyubids,
  CIVILIZATION_BY_SLUG.jeannedarc,
  CIVILIZATION_BY_SLUG.lancaster,
  CIVILIZATION_BY_SLUG.templar,
];

export const indexToLetter = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
};

export type Score = {
  correct: number;
  incorrect: number;
  total: number;
  streak: number;
};

export function updateScore(choice: number, correctAnswer: number, score: Score) {
  const correct = choice === correctAnswer;
  score = { ...score };
  score.correct += correct ? 1 : 0;
  score.incorrect += !correct ? 1 : 0;
  score.total += 1;
  score.streak = correct ? score.streak + 1 : 0;
  return score;
}

export function useKeyHandler(pickChoice: (choice: number) => void, finished: () => boolean) {
  const keysLetters = Object.values(indexToLetter);
  const keysNumbers = keysLetters.map((v, i) => (i + 1).toString());

  function keyDownListener(e: KeyboardEvent) {
    if (finished()) return;
    const key = e.key.toUpperCase();
    const indexLetter = keysLetters.indexOf(key);
    const indexNumber = keysNumbers.indexOf(key);
    if (indexLetter !== -1 && !e.metaKey && !e.ctrlKey) {
      pickChoice(indexLetter);
      e.preventDefault();
    }
    if (indexNumber !== -1) {
      pickChoice(indexNumber);
      e.preventDefault();
    }
  }
  onMount(() => window.addEventListener("keydown", keyDownListener));
  onCleanup(() => window.removeEventListener("keydown", keyDownListener));
}
