import { Component, createResource, createSignal, For, JSX, Show } from "solid-js";
import { Icon } from "@components/Icon";
import { formatAnswer, getRandomQuestion, loadCustomQuestions } from "./questions";
import { Random } from "./random";
import { DLC_CIVS, indexToLetter, updateScore, useKeyHandler } from "./shared";

enum QuizState {
  Asking,
  ShowingResults,
  Finished,
}

export const Quiz: Component<{ difficulty?: number; questionsUrl?: string; numQuestions?: number }> = (props) => {
  const [score, setScore] = createSignal({ correct: 0, incorrect: 0, total: 0, streak: 0 });
  const [questionCount, setQuestionCount] = createSignal(0);
  const [quizState, setQuizState] = createSignal<QuizState>(QuizState.Asking);
  const [selectedChoice, setSelectedChoice] = createSignal<number>(undefined);
  const [customQuestions] = createResource(props.questionsUrl, loadCustomQuestions);
  const [question, { refetch }] = createResource(
    () => !customQuestions.loading,
    (ready) => ready && getRandomQuestion(score().correct - score().incorrect + (props.difficulty ?? 0), Random.pick(DLC_CIVS))
  );

  let evaluationTimer = 0;
  const pickChoice = (number: number) => {
    if (quizState() !== QuizState.Asking) return;
    setQuizState(QuizState.ShowingResults);
    setSelectedChoice(number);
    setScore(updateScore(number, question().correctAnswer, score()));
    clearTimeout(evaluationTimer);
    evaluationTimer = window.setTimeout(() => {
      next();
    }, 1000);
  };

  useKeyHandler(pickChoice, () => quizState() === QuizState.Finished);


  function next(reroll?: boolean) {
    if (!reroll)
      setQuestionCount((q) => q + 1);
    setSelectedChoice(undefined);
    if (props.numQuestions && questionCount() >= props.numQuestions) {
      setQuizState(QuizState.Finished);
      return;
    }
    refetch();
    setQuizState(QuizState.Asking);
  }

  function finishQuiz() {
    if (quizState() === QuizState.Finished) return;
    setQuizState(QuizState.Finished);
  }

  return (
    <div class="my-5 rounded-lg p-6 bg-gray-600">
      <Show
        when={quizState() !== QuizState.Finished}
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
                next(true);
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
                  <button class="bg-gray-400 text-sm p-4 rounded mt-6" onClick={() => finishQuiz()}>Finish</button>
                </div>
              )}
            </div>
          }
        >
          <h3 class="font-bold text-white text-2xl my-3">{question()?.question}</h3>
          <p class="text-gray-200 mt-1 ">{question()?.note}</p>

          <div class="flex flex-col gap-4 mt-8">
            <For each={question().answers}>
              {(answer, index) => (
                <MultipleChoiceOption
                  option={indexToLetter[index()]}
                  disabled={quizState() !== QuizState.Asking}
                  selected={index() == selectedChoice()}
                  correct={quizState() === QuizState.ShowingResults ? (index() == question()?.correctAnswer ? true : index() == selectedChoice() ? false : null) : undefined}
                  onPick={() => pickChoice(index())}
                >
                  {formatAnswer(answer)}
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

export const MultipleChoiceOption: Component<{ option: "A" | "B" | "C" | "D"; correct?: boolean; selected?: boolean; disabled?: boolean; onPick: Function; class?: string, children: JSX.Element }> = (props) => {
  return (
    <button
      class={`whitespace-nowrap inline-flex items-center gap-2 bg-gray-500 p-2
              outline outline-gray-800 rounded-md
              ${!props.disabled ? "hover:outline-white/30 hover:bg-gray-400/50 active:bg-white active:text-black" : ""}
              ${props.correct === true ?  "bg-green-800 outline-green-500" :
                props.correct === false ? "bg-red-800 outline-red-500" :
                props.correct === null ?  "opacity-50" :
                props.correct === undefined ? (props.selected ? "outline-white outline-2 opacity-100" : props.disabled ? "opacity-60" : "") :
                ""}
              ${props.class ?? ""}
            `}
      disabled={props.disabled}
      onClick={() => props.onPick()}
    >
      <kbd class="bg-white/10 py-2 px-4 text-inherit rounded mr-4">{props.option}</kbd>
      {props.children}
    </button>
  );
};
