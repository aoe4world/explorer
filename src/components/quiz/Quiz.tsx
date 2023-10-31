import { Component, createResource, createSignal, For, onCleanup, onMount } from "solid-js";
import { Icon } from "@components/Icon";
import { getRandomQuestion } from "./questions";

export const Quiz: Component<{ difficulty?: number }> = (props) => {
  const [score, setScore] = createSignal({ correct: 0, incorrect: 0, total: 0, streak: 0 });
  const [pending, setPending] = createSignal(false);
  const [question, { refetch }] = createResource(() => getRandomQuestion(score().correct - score().incorrect + (props.difficulty ?? 0)));
  const [choice, setChoice] = createSignal<number>(undefined);

  let pendingTimer = 0;
  const pickChoice = (number) => {
    if (pending()) return;
    setPending(true);
    setChoice(number);
    const correct = choice() === question().correctAnswer;
    const s = { ...score() };
    s.correct += correct ? 1 : 0;
    s.incorrect += !correct ? 1 : 0;
    s.total += 1;
    s.streak = correct ? s.streak + 1 : 0;
    setScore(s);
    clearTimeout(pendingTimer);
    pendingTimer = window.setTimeout(() => {
      refetch();
      setChoice(undefined);
      setPending(false);
    }, 1000);
  };
  function keyDownListener(e: KeyboardEvent) {
    const key = e.key.toUpperCase();
    if (keys.includes(key) && !e.metaKey && !e.ctrlKey) {
      pickChoice(keys.indexOf(key));
      e.preventDefault();
    }
    if ([1, 2, 3, 4].includes(parseInt(e.key))) {
      pickChoice(parseInt(e.key) - 1);
      e.preventDefault();
    }
  }
  onMount(() => window.addEventListener("keydown", keyDownListener));

  onCleanup(() => window.removeEventListener("keydown", keyDownListener));

  return (
    <div class="my-5 rounded-lg p-6 bg-gray-600">
      <div class="flex items-center">
        <h5 class="font-bold text-gray-300 uppercase text-sm mb-1 flex-auto">
          Question{" "}
          <button
            onClick={() => {
              refetch();
            }}
          >
            <Icon icon="dice" />
          </button>
        </h5>
        {score().total && (
          <div class="flex gap-4">
            {score().streak > 2 && (
              <span class="text-orange-300">
                <Icon icon="fire" /> {score().streak} streak
              </span>
            )}
            <span class="text-green-500">
              <Icon icon="circle-check" /> {score().correct}
            </span>
            <span class="text-red-500">
              <Icon icon="circle-xmark" /> {score().incorrect}
            </span>
          </div>
        )}
      </div>
      <h3 class="font-bold text-white text-2xl my-3">{question()?.question}</h3>
      <p class="text-gray-200 mt-1 ">{question()?.note}</p>

      <div class="flex flex-col gap-4 mt-8">
        <For each={question()?.answers}>
          {(answer, index) => (
            <MultipleChoiceOption
              option={indexToLetter[index()]}
              correct={choice() !== undefined ? (index() == question()?.correctAnswer ? true : index() == choice() ? false : null) : undefined}
              onPick={() => pickChoice(index)}
            >
              {answer}
            </MultipleChoiceOption>
          )}
        </For>
      </div>
      {score()?.correct >= 30 && (
        <div class="bg-gray-400 text-sm p-4 rounded mt-6">
          The quiz currently goes on indefinetly. You reach 30+ correct answers, great job. You can stop if you want to.
        </div>
      )}
    </div>
  );
};

export const MultipleChoiceOption: Component<{ option: "A" | "B" | "C" | "D"; correct?: boolean; onPick: Function; class?: string }> = (props) => {
  return (
    <button
      class={`whitespace-nowrap inline-flex items-center gap-2 bg-gray-500 p-2  
    outline outline-gray-800 rounded-md 
    ${props.correct === undefined ? "hover:outline-white/30 hover:bg-gray-400/50 active:bg-white active:text-black" : ""}
    ${props.correct === null ? "opacity-50" : ""}
    ${props.correct ? "bg-green-800 outline-green-500" : ""}
    ${props.correct === false ? "bg-red-800 outline-red-500" : ""}
    ${props.class ?? ""}
    `}
      onClick={() => props.onPick()}
    >
      <kbd class="bg-white/10 py-2 px-4 text-inherit rounded mr-4">{props.option}</kbd>
      {props.children}
    </button>
  );
};

const indexToLetter = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
};

const keys = Object.values(indexToLetter);
