import { Component, createResource, createSignal, For, Show } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { Icon } from "../Icon";
import { formatAnswer, getRandomQuestion, loadCustomQuestions } from "./questions";
import { MultipleChoiceOption } from "./SoloQuiz";
import { ChatClient } from "@twurple/chat";
import { Random } from "./random";
import { indexToLetter, DLC_CIVS, Score, updateScore, useKeyHandler } from "./shared";

let cancelableAction: Function;
let secondsInterval;
import { TwitchGiveaway } from "./TwitchGiveaway";
export const TwitchQuiz: Component<{ difficulty?: number; channel?: string; gracePeriod?: number; autoplaySpeed?: number; questionsUrl?: string; numQuestions?: number; hideVotes?: boolean }> = (props) => {
  const graceperiod = props.gracePeriod ?? 5000;
  const autoplaySpeed = props.autoplaySpeed ?? 15000;
  const [choice, setChoice] = createSignal<number>(undefined);
  const [users, setUsers] = createStore<Record<string, TwitchUser>>({});
  const [pendingAnswers, setPendingAnswers] = createStore<PendingAnswers>({ total: {}, host: undefined, viewers: {} });
  const [scores, setScores] = createStore<Scores>({ host: { correct: 0, incorrect: 0, total: 0, streak: 0 }, viewers: [] });
  const [autoplay, setAutoplay] = createSignal(false);
  const [showGiveaway, setShowGiveaway] = createSignal(false);
  const [stepQueued, setStepQueued] = createSignal(false);
  const [nextReady, setNextReady] = createSignal(false);
  const [questionCount, setQuestionCount] = createSignal(0);
  const [finished, setFinished] = createSignal(false);
  const [submissionsClosed, setSubmissionsClosed] = createSignal(false);
  const [pendingSubmissionsClosed, setPendingSubmissionsClosed] = createSignal(false);
  const [customQuestions] = createResource(props.questionsUrl, loadCustomQuestions);
  const [question, { refetch }] = createResource(
    () => !customQuestions.loading,
    async (ready) => {
      if (!ready) return null;
      const q = await getRandomQuestion(questionCount() + (props.difficulty ?? 0), Random.pick(DLC_CIVS));
      if (!q) setFinished(true);
      return q;
    }
  );
  const [formattedAnswers] = createResource(question, async (q) => q ? Promise.all(q.answers.map(formatAnswer)) : []);
  const [secondsLeft, setSecondsLeft] = createSignal(0);
  let progressBar: HTMLDivElement;

  const chat = useIncomingTwitchMessages({ channel: props.channel }, ({ user, message }) => {
    const choice = parseChoice(message);
    if (choice == undefined) return;
    if (user.username === props.channel) registerHostChoice(choice);
    else {
      if (!users[user.username]) setUsers(user.username, user);
      registerViewerChoice(user.username, choice);
    }
  });

  // onCleanup(async () => (await chat).disconnect()); // This line was commented out in the original file, keeping it commented.

  function setTimer(cb: Function, time: number, cancelable = false) {
    if (cancelable) cancelableAction = cb;
    setStepQueued(true);
    clearInterval(secondsInterval);
    setSecondsLeft(Math.ceil(time / 1000));
    secondsInterval = window.setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    progressBar.getAnimations().forEach((a) => a.cancel());
    progressBar?.animate([{ width: "100%" }, { width: "0%" }], { duration: time, easing: "linear" });
    setTimeout(() => {
      clearInterval(secondsInterval);
      setSecondsLeft(0);
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
      clearInterval(secondsInterval);
      setSecondsLeft(0);
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
    if (props.numQuestions && questionCount() >= props.numQuestions) {
      setFinished(true);
      return;
    }
    refetch();
    if (autoplay()) setTimer(stopSubmissionsAndShowResults, autoplaySpeed, true);
  }

  useKeyHandler(pickChoice, finished);

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

  function formatSeconds(s: number) {
    return s == 1 ? "01 second" : `${s < 10 ? `0${s}` : s} seconds`;
  }

  return (
    <div class="my-5 rounded-lg p-6 bg-gray-600 relative">
      <Show
        when={!finished()}
        fallback={
          <div class="text-center">
            <h3 class="font-bold text-white text-2xl my-3">Quiz Finished!</h3>
            <p class="text-gray-200 mt-1 ">The quiz has ended. Check out the final scores below.</p>
            <div class="flex gap-4 justify-center mt-6">
              <button class="bg-gray-400 text-sm p-4 rounded" onClick={() => window.location.reload()}>
                Play Again
              </button>
              <button class="bg-gray-700 text-sm p-4 rounded" onClick={() => setShowGiveaway(true)}>
                Start Giveaway
              </button>
            </div>
          </div>
        }
      >
        <div class="absolute top-0 left-0 h-1 bg-gray-300" ref={progressBar} />
        <div class="flex items-center">
          <h5 class="font-bold text-gray-300 uppercase text-sm mb-1 flex-auto">
            Question {props.numQuestions && `${questionCount() + 1} / ${props.numQuestions}`}{" "}
            <button
              onClick={() => {
                pauseAutoplay();
                refetch();
              }}
            >
              <Icon icon="dice" />
            </button>
          </h5>
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
        <Show when={!question.loading} fallback={<div class="text-center p-8">Loading question...</div>}>
          <h3 class="font-bold text-white text-2xl my-3">{question()?.question}</h3>
          <p class="text-gray-200 mt-1 ">{question()?.note}</p>

          <div class="flex flex-col gap-4 mt-8">
            <For each={formattedAnswers()}>
              {(answer, index) => (
                <MultipleChoiceOption
                  option={indexToLetter[index()]}
                  class={`${pendingSubmissionsClosed() ? "opacity-60" : ""}
              ${choice() === undefined && pendingAnswers.host == index() ? "!outline-white outline-2 !opacity-100" : ""}`}
                  correct={choice() !== undefined ? (index() == question()?.correctAnswer ? true : index() == choice() ? false : null) : undefined}
                  onPick={() => pickChoice(index)}
                >
                  {answer}
                  <span class="ml-auto mr-2">
                    {pendingAnswers.host == index() && <Icon icon="video-camera" class="mr-2" />}
                    {props.hideVotes && !submissionsClosed() ? "" : pendingAnswers.total[index()]}
                  </span>
                </MultipleChoiceOption>
              )}
            </For>
          </div>
        </Show>

        <div class="flex gap-4 my-4 items-center h-12">
          {pendingSubmissionsClosed() && <div>Submissions closed.</div>}
          {submissionsClosed() && <div>Results are in! {secondsLeft() && <>Next question in {formatSeconds(secondsLeft())}.</>}</div>}
          {!pendingSubmissionsClosed() && !submissionsClosed() && (
            <div>Send your answers in chat (i.e. 'A' or 'B'). {secondsLeft() && <>Round closes in {formatSeconds(secondsLeft())}.</>}</div>
          )}
          <div class="ml-auto">
            <Show
              when={nextReady()}
              fallback={
                <Show when={!autoplay() && !submissionsClosed()}>
                  <button
                    class="bg-gray-50 hover:bg-white text-black rounded py-2 px-6 disabled:opacity-30 disabled:bg-gray-700"
                    onClick={() => stopSubmissionsAndShowResults()}
                    disabled={pendingSubmissionsClosed()}
                  >
                    End Submissions
                  </button>
                </Show>
              }
            >
              {
                !props.numQuestions && !autoplay() &&
                <button
                  class="bg-gray-500 hover:bg-gray-300 text-white rounded py-2 px-6 mr-4 disabled:opacity-30 disabled:bg-gray-700"
                  onClick={() => setFinished(true)}
                  disabled={!nextReady()}
                >
                  Finish
                </button>
              }
              <button
                class="bg-gray-50 hover:bg-white text-black rounded py-2 px-6 disabled:opacity-30 disabled:bg-gray-700"
                onClick={() => next()}
                disabled={!nextReady() || autoplay()}
              >
                  {props.numQuestions && questionCount() + 1 >= props.numQuestions ? "Finish" : "Next"}
              </button>
            </Show>
            </div>
        </div>
      </Show>
      <div class="flex flex-row gap-5">
        <div class="basis-1/2">
          {(!finished() &&
          <>
            <h5 class="font-bold text-gray-300 uppercase text-sm mb-1 mt-8">Answers ({Object.values(pendingAnswers.total).length})</h5>
            <div class="flex flex-col gap-1 mt-2">
              {pendingAnswers.host != undefined && (
                <div class={choice() ? (question().correctAnswer == pendingAnswers.host ? "text-green-500" : "opacity-30") : ""}>
                  <strong class="font-bold">{props.channel}</strong> {indexToLetter[pendingAnswers.host]}
                </div>
              )}
              <For each={Object.entries(pendingAnswers.viewers)}>
                {([username, viewerChoice]) => (
                  <div class={choice() ? (question().correctAnswer == viewerChoice ? "text-green-500" : "opacity-30") : ""}>
                    <strong style={{ color: users[username]?.color }}>{users[username]?.display_name ?? username}</strong>{" "}
                    {props.hideVotes && !submissionsClosed() ? <span class="opacity-50">(voted)</span> : indexToLetter[viewerChoice]}
                  </div>
                )}
              </For>
            </div>
          </>
          )}
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
                      <td class="flex items-center gap-2">
                        <span style={{ color: users[viewer.username]?.color }}>{users[viewer.username]?.display_name ?? viewer.username}</span>
                        {users[viewer.username]?.moderator && <Icon icon="shield-halved" class="text-purple-400 opacity-80" title="Moderator" />}
                        {users[viewer.username]?.subscriber && <Icon icon="star" class="text-yellow-400 opacity-80" title="Subscriber" />}
                      </td>
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
      <Show when={showGiveaway()}>
        <TwitchGiveaway scores={scores} users={users} channel={props.channel} onClose={() => setShowGiveaway(false)} />
      </Show>
    </div>
  );
};


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
  const listener = chatClient.onMessage(async (channel: string, user: string, message: string, data) => {
    console.log(user, data);
    callback({ user: { username: user, display_name: data.userInfo.displayName, color: data.userInfo.color, subscriber: data.userInfo.isSubscriber, moderator: data.userInfo.isMod }, message })
  }
  );

  const disconnect = () => chatClient.removeListener(listener);
  return { disconnect };
}


export type Scores = {
  host: Score;
  viewers: ({ username: string } & Score)[];
};

type PendingAnswers = {
  total: Record<number, number>;
  host: number;
  viewers: { [username: string]: number };
};

export type TwitchUser = {
  username: string;
  display_name: string;
  color: string;
  subscriber: boolean;
  moderator: boolean;
};
