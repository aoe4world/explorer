import { Link, useParams } from "solid-app-router";
import { Component, createSignal, onCleanup, Show } from "solid-js";
import { Icon } from "../../components/Icon";
import { TwitchQuiz } from "../../components/quiz/TwitchQuiz";
import { setHideNav } from "../../components/Toolbar";

export const QuizRoute: Component = () => {
  const [show, setShow] = createSignal(false);
  const [difficulty, setDifficulty] = createSignal(0);
  const [channel, setChannel] = createSignal(useParams()?.channel ?? "");

  setHideNav(true);
  onCleanup(() => setHideNav(false));

  return (
    <div class="max-w-screen-lg p-4 mx-auto gap-4 mb-4 mt-8">
      <Show
        when={show()}
        fallback={
          <div class="my-5 rounded-lg p-6 bg-gray-600 ">
            <div class="max-w-lg mx-auto leading-relaxed">
              <h1 class="font-bold text-white text-2xl my-3">
                <Icon icon="twitch" class="fab mr-4 text-purple-600" />
                Test your viewers' game knowledge
              </h1>
              <p class="text-gray-200 my-4 font-bold max-w-prose ">
                This is the multiplayer version of our{" "}
                <Link href="/quiz" class="underline  text-white">
                  Quiz
                </Link>
                . Viewers can submit their answers via chat (By i.e. sending 'A' or 'B') and try to get a streak. The difficulty of questions increases over
                time.
              </p>
              <p>There are two ways you can play this:</p>
              <div class="my-4">
                <strong class="font-bold text-gray-300 mb-0.5 block">Manual</strong>
                You click the answer you think is best, while viewers send their answer in chat. Once you picked an answer, submission close and the answer is
                revealed. Click 'next' for a new question.
              </div>
              <div class="my-4">
                <strong class="font-bold text-gray-300 mb-0.5 block">Autoplay</strong>
                There's a set time for the viewers to submit answers, after the timer is done, the correct answer is displayed and a new question loads. This
                mode is great to turn on while you are taking a small brake, you can however participate if you want by selecting your own answers.
              </div>
              <p class="text-gray-200 mt-1 max-w-prose">Try and get the longest streak and have fun!</p>
              <div class="flex flex-row gap-4 items-center mt-8">
                <input
                  class="py-2 px-4 rounded-md text-lg placeholder:opacity-50 text-black flex-auto focus:outline-purple-500 focus:ring-0"
                  placeholder="enter your channel_name"
                  onInput={(e) => setChannel(e.currentTarget.value)}
                  value={channel()}
                />
                <button
                  class="whitespace-nowrap inline-flex items-center gap-2 bg-purple-400 py-2 px-10 font-bold text-lg text-purple-900 outline outline-purple-800 rounded-md
             hover:outline-white/30 hover:bg-purple-300 active:bg-white active:text-purple-900"
                  onClick={() => setShow(true)}
                >
                  Start
                </button>
              </div>
              <button
                onClick={() => setDifficulty(80) && setShow(true)}
                class="fond-bold underline underline-offset-2 text-sm text-gray-300 p-2 active:outline outline-white"
              >
                Start without easy questions
              </button>
              {channel()?.length > 3 && (
                <small class="text-gray-300 text-sm mt-4 block">Tip: Instantly start the quiz for your channel by navigating to {window.location.href}</small>
              )}
            </div>
          </div>
        }
      >
        <TwitchQuiz difficulty={100 ?? difficulty()} channel={channel()} />
      </Show>
    </div>
  );
};

export default QuizRoute;
