import { Component, createResource, createSignal, For, onCleanup, onMount } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { Icon } from "../Icon";
import { getRandomQuestion } from "./questions";
import { MultipleChoiceOption } from "./Quiz";
import { ChatClient } from "@twurple/chat";
import { Random } from "./random";

const graceperiod = 7000,
  autoplaySpeed = 20000;

let cancelableAction: Function;
export const TwitchQuiz: Component<{ difficulty?: number; channel?: string }> = (props) => {
  const [choice, setChoice] = createSignal<number>(undefined);
  const [users, setUsers] = createStore<Record<string, TwitchUser>>({});
  const [pendingAnswers, setPendingAnswers] = createStore<PendingAnswers>({ total: {}, host: undefined, viewers: {} });
  const [scores, setScores] = createStore<Scores>({ host: { correct: 0, incorrect: 0, total: 0, streak: 0 }, viewers: [] });
  const [autoplay, setAutoplay] = createSignal(false);
  const [stepQueued, setStepQueued] = createSignal(false);
  const [nextReady, setNextReady] = createSignal(false);
  const [questionCount, setQuestionCount] = createSignal(0);
  const [submissionsClosed, setSubmissionsClosed] = createSignal(false);
  const [pendingSubmissionsClosed, setPendingSubmissionsClosed] = createSignal(false);
  const [question, { refetch }] = createResource(() => getRandomQuestion(questionCount() + (props.difficulty ?? 0)));
  let progressBar: HTMLDivElement;

  const chat = useIncomingTwitchMessages({ channel: props.channel }, ({ user, message }) => {
    const choice = parseChoice(message) ?? Random.pick([0, 1, 2, 3]);
    if (choice == undefined) return;
    if (!users[user.username]) setUsers(user.username, user);
    registerViewerChoice(user.username, choice);
  });

  onCleanup(async () => (await chat).disconnect());
  function setTimer(cb: Function, time: number, cancelable = false) {
    setStepQueued(true);
    if (cancelable) cancelableAction = cb;
    progressBar.getAnimations().forEach((a) => a.cancel());
    progressBar?.animate([{ width: "100%" }, { width: "0%" }], { duration: time, easing: "linear" });
    setTimeout(() => {
      if (cancelable) {
        if (cancelableAction === cb) {
          cancelableAction = undefined;
          cb();
        }
      } else cb();
      setStepQueued(false);
    }, time);
  }

  function stopTimer() {
    if (cancelableAction) {
      cancelableAction = undefined;
      progressBar.getAnimations().forEach((a) => a.cancel());
      progressBar.style.width = "0%";
      setStepQueued(false);
    }
  }

  const pickChoice = (choice) => registerHostChoice(choice);

  function registerHostChoice(choice: number) {
    if (submissionsClosed() || pendingAnswers.host !== undefined) return;
    setPendingAnswers("host", choice);
    setPendingAnswers("total", choice, (t) => (t ? t + 1 : 1));
    if (!autoplay()) stopSubmissionsAndShowResults();
  }

  function registerViewerChoice(username: string, choice: number) {
    if (submissionsClosed() || pendingAnswers.viewers[username] != undefined) return;
    setPendingAnswers("viewers", (viewers) => ({ [username]: choice, ...viewers }));
    setPendingAnswers("total", choice, (t) => (t ? t + 1 : 1));
  }

  function stopSubmissionsAndShowResults() {
    setPendingSubmissionsClosed(true);
    setTimer(getResults, graceperiod, false);
  }

  function getResults() {
    setSubmissionsClosed(true);
    setPendingSubmissionsClosed(false);
    setChoice(pendingAnswers.host ?? question().correctAnswer);

    setScores(
      produce((scores) => {
        if (pendingAnswers.host != undefined) scores.host = updateScore(pendingAnswers.host, question().correctAnswer, scores.host);
        const newViewers = Object.entries(pendingAnswers.viewers)
          .filter(([username]) => !scores.viewers.find((v) => v.username === username))
          .map(([username, choice]) => ({ username, ...updateScore(choice, question().correctAnswer, { correct: 0, incorrect: 0, total: 0, streak: 0 }) }));

        scores.viewers = scores.viewers
          .reduce((viewers, viewer) => {
            if (pendingAnswers.viewers[viewer.username] != undefined)
              viewer = { ...viewer, ...updateScore(pendingAnswers.viewers[viewer.username], question().correctAnswer, viewer) };
            viewers.push(viewer);
            return viewers;
          }, newViewers)
          .sort((a, b) => b.total - a.total)
          .sort((a, b) => b.correct - a.correct);
      })
    );
    setNextReady(true);
    if (autoplay()) {
      setTimer(next, autoplaySpeed * 0.5, true);
    }
  }

  function next() {
    setNextReady(false);
    setQuestionCount((q) => q + 1);
    setChoice(undefined);
    setPendingSubmissionsClosed(false);
    setSubmissionsClosed(false);
    setPendingAnswers({ total: {}, host: undefined, viewers: {} });
    refetch();
    if (autoplay()) setTimer(stopSubmissionsAndShowResults, autoplaySpeed, true);
  }

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

  function startAutoplay() {
    if (autoplay()) return;
    setAutoplay(true);
    if (stepQueued()) return;
    if (nextReady()) {
      setNextReady(false);
      setTimer(next, autoplaySpeed * 0.5, true);
    } else if (!setPendingSubmissionsClosed()) setTimer(stopSubmissionsAndShowResults, autoplaySpeed, true);
  }

  function pauseAutoplay() {
    if (!autoplay()) return;
    setAutoplay(false);
    stopTimer();
  }

  return (
    <div class="my-5 rounded-lg p-6 bg-gray-600 relative">
      <div class="absolute top-0 left-0 h-1 bg-gray-300" ref={progressBar} />
      <div class="flex items-center">
        <h5 class="font-bold text-gray-300 uppercase text-sm mb-1 flex-auto">Question</h5>
        {autoplay() && (
          <button onClick={() => pauseAutoplay()}>
            <Icon icon="pause" class="text-gray-300" />
          </button>
        )}
        {!autoplay() && (
          <button onClick={() => startAutoplay()} class="text-gray-300 font-bold">
            <Icon icon="play" /> Autoplay
          </button>
        )}
      </div>
      <h3 class="font-bold text-white text-2xl my-3">{question()?.question}</h3>
      <p class="text-gray-200 mt-1 ">{question()?.note}</p>

      <div class="flex flex-col gap-4 mt-8">
        <For each={question()?.answers}>
          {(answer, index) => (
            <MultipleChoiceOption
              option={indexToLetter[index()]}
              class={`${pendingSubmissionsClosed() ? "opacity-60" : ""} 
              ${choice() === undefined && pendingAnswers.host == index() ? "!outline-white outline-2 !opacity-100" : ""}`}
              correct={choice() !== undefined ? (index() == question()?.correctAnswer ? true : index() == choice() ? false : null) : undefined}
              onPick={() => pickChoice(index)}
            >
              {/*@once*/ answer}
              <span class="ml-auto mr-2">
                {pendingAnswers.host == index() && <Icon icon="video-camera" class="mr-2" />}
                {pendingAnswers.total[index()]}
              </span>
            </MultipleChoiceOption>
          )}
        </For>
      </div>

      <div class="flex gap-4 my-4 items-center h-12">
        {pendingSubmissionsClosed() && <div>Submissions closed, waiting for last messages to come in</div>}
        {submissionsClosed() && <div>Results are in!</div>}
        {!pendingSubmissionsClosed() && !submissionsClosed() && <div>Send your answers in chat (i.e. 'A' or 'B')</div>}
        <button
          class="ml-auto bg-gray-50 hover:bg-white text-black rounded py-2 px-6 disabled:opacity-30 disabled:bg-gray-700"
          onClick={() => next()}
          disabled={!nextReady() || autoplay()}
        >
          Next
        </button>
      </div>
      <div class="flex flex-row gap-5">
        <div class="basis-1/2">
          <h5 class="font-bold text-gray-300 uppercase text-sm mb-1 mt-8">Answers</h5>
          <div class="flex flex-col gap-1 mt-2">
            {pendingAnswers.host != undefined && (
              <div class={choice() ? (question().correctAnswer == pendingAnswers.host ? "text-green-500" : "opacity-30") : ""}>
                <strong class="font-bold">{props.channel}</strong> {indexToLetter[pendingAnswers.host]}
              </div>
            )}
            <For each={Object.entries(pendingAnswers.viewers)}>
              {([username, viewerChoice]) => (
                <div class={choice() ? (question().correctAnswer == viewerChoice ? "text-green-500" : "opacity-30") : ""}>
                  <strong style={{ color: users[username]?.color }}>{username}</strong> {indexToLetter[viewerChoice]}
                </div>
              )}
            </For>
          </div>
        </div>
        <div class="basis-1/2">
          {(scores.viewers.length || scores.host.total) && (
            <table class="mt-8 table-auto">
              <thead>
                <tr>
                  <th class="text-left min-w-[200px]" colSpan={2}>
                    <h5 class="font-bold text-gray-300 uppercase text-sm mb-1 ">Scores</h5>
                  </th>
                  <th>
                    <Icon icon="circle-check" class="text-green-500 mx-2" />
                  </th>
                  <th>
                    <Icon icon="circle-xmark" class="text-red-500 mx-2" />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {scores.host.total && (
                  <tr>
                    <td>
                      <Icon icon="video-camera" class="mr-2" />
                    </td>
                    <td>{props.channel}</td>
                    <td class="text-green-500 text-center">{scores.host.correct}</td>
                    <td class="text-red-500 text-center">{scores.host.incorrect}</td>
                    <td>
                      {scores.host?.streak > 2 && (
                        <span class="text-orange-300">
                          <Icon icon="fire" /> {scores.host.streak} streak
                        </span>
                      )}
                    </td>
                  </tr>
                )}
                <For each={scores.viewers}>
                  {(viewer, i) => (
                    <tr>
                      <td>{i() + 1}.</td>
                      <td>{viewer.username}</td>
                      <td class="text-green-500 text-center">{viewer.correct}</td>
                      <td class="text-red-500 text-center">{viewer.incorrect}</td>
                      <td>
                        {viewer.streak > 2 && (
                          <span class="text-orange-300">
                            <Icon icon="fire" /> {viewer.streak} streak
                          </span>
                        )}
                      </td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

function updateScore(choice: number, correctAnswer: number, score: Score) {
  const correct = choice === correctAnswer;
  score = { ...score };
  score.correct += correct ? 1 : 0;
  score.incorrect += !correct ? 1 : 0;
  score.total += 1;
  score.streak = correct ? score.streak + 1 : 0;
  return score;
}

function parseChoice(message: string) {
  const letters = ["a", "b", "c", "d", "e"];
  const choice = message.trim().toLowerCase();
  const char = choice.charAt(0);
  if (choice.length > 1 && ![...choice].every((c) => c == char)) return undefined;
  if (!isNaN(parseInt(char))) return parseInt(char);
  else if (letters.indexOf(char) > -1) return letters.indexOf(char);
  return undefined;
}

async function useIncomingTwitchMessages({ channel }: { channel: string }, callback: ({ user, message }: { user: TwitchUser; message: string }) => void) {
  const chatClient = new ChatClient({ channels: [channel] });
  await chatClient.connect();
  const listener = chatClient.onMessage(async (channel: string, user: string, message: string, data) =>
    callback({ user: { username: user, color: data.userInfo.color, subscriber: data.userInfo.isSubscriber }, message })
  );

  const disconnect = () => chatClient.removeListener(listener);
  return { disconnect };
}

const indexToLetter = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
};
const keys = Object.values(indexToLetter);

type Score = {
  correct: number;
  incorrect: number;
  total: number;
  streak: number;
};

type Scores = {
  host: Score;
  viewers: ({ username: string } & Score)[];
};

type PendingAnswers = {
  total: Record<number, number>;
  host: number;
  viewers: { [username: string]: number };
};

type TwitchUser = {
  username: string;
  color: string;
  subscriber: boolean;
};
