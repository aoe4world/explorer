import { Component, createResource, createSignal, For, JSX, Show } from "solid-js";
import { Icon } from "@components/Icon";
import { formatAnswer, getRandomQuestion, loadCustomQuestions } from "./questions";
import { Random } from "./random";
import { DLC_CIVS, indexToLetter, updateScore, useKeyHandler } from "./shared";

export const Quiz: Component<{ difficulty?: number; questionsUrl?: string; numQuestions?: number }> = (props) => {
  const [score, setScore] = createSignal({ correct: 0, incorrect: 0, total: 0, streak: 0 });
  const [pending, setPending] = createSignal(false);
  const [questionCount, setQuestionCount] = createSignal(0);
  const [finished, setFinished] = createSignal(false);
  const [customQuestions] = createResource(props.questionsUrl, loadCustomQuestions);
  const [question, { refetch }] = createResource(
    () => !customQuestions.loading,
    (ready) => ready && getRandomQuestion(score().correct - score().incorrect + (props.difficulty ?? 0), Random.pick(DLC_CIVS))
  );
  const [choice, setChoice] = createSignal<number>(undefined);
  const [formattedAnswers] = createResource(question, async (q) => q ? Promise.all(q.answers.map(formatAnswer)) : []);

  let pendingTimer = 0;
  const pickChoice = (number) => {
    if (pending()) return;
    setPending(true);
    setChoice(number);
    setScore(updateScore(number, question().correctAnswer, score()));
    clearTimeout(pendingTimer);
    pendingTimer = window.setTimeout(() => {
      setChoice(undefined);
      setPending(false);
      next();
    }, 1000);
  };

  const next = () => {
    setQuestionCount((q) => q + 1);
    if (props.numQuestions && questionCount() >= props.numQuestions) {
      setFinished(true);
      return;
    }
    refetch();
    setChoice(undefined);
    setPending(false);
  }

  useKeyHandler(pickChoice, finished);

  return (
    <div class="my-5 rounded-lg p-6 bg-gray-600">
      <Show
        when={!finished()}
        fallback={
          <div class="text-center">
            <h3 class="font-bold text-white text-2xl my-3">Quiz Finished!</h3>
            <p class="text-gray-200 mt-1 ">You answered {score().correct} out of {questionCount()} questions correctly.</p>
            <button class="bg-gray-400 text-sm p-4 rounded mt-6" onClick={() => window.location.reload()}>Play Again</button>
          </div>
        }
      >
        <div class="flex items-center">
          <h5 class="font-bold text-gray-300 uppercase text-sm mb-1 flex-auto">
            Question {props.numQuestions && `${questionCount() + 1} / ${props.numQuestions}`}{" "}
            <button
              onClick={() => {
                next();
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
        <Show
          when={!question.loading && question()}
          fallback={
            <div class="text-center p-8">
              {question.loading ? "Loading question..." : (
                <div class="flex flex-col items-center">
                  <span>No more questions available.</span>
                  <button class="bg-gray-400 text-sm p-4 rounded mt-6" onClick={() => setFinished(true)}>Finish</button>
                </div>
              )}
            </div>
          }
        >
          <h3 class="font-bold text-white text-2xl my-3">{question()?.question}</h3>
          <p class="text-gray-200 mt-1 ">{question()?.note}</p>

          <div class="flex flex-col gap-4 mt-8">
            <For each={formattedAnswers()}>
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
        </Show>
        {!props.numQuestions && score()?.correct >= 30 && (
          <div class="bg-gray-400 text-sm p-4 rounded mt-6">
            The quiz currently goes on indefinitely. You reach 30+ correct answers, great job. You can stop if you want to.
          </div>
        )}
      </Show>
    </div>
  );
};

export const MultipleChoiceOption: Component<{ option: "A" | "B" | "C" | "D"; correct?: boolean; onPick: Function; class?: string, children: JSX.Element }> = (props) => {
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


