import { Link, useLocation } from "solid-app-router";
import { Component, createSignal, onCleanup, Show } from "solid-js";
import { setActivePage } from "../../App";
import { Icon } from "@components/Icon";
import { Quiz } from "@components/quiz/Quiz";
import { hideNav, setHideNav } from "@components/Toolbar";

export const QuizRoute: Component = () => {
  const [show, setShow] = createSignal(false);
  const [difficulty, setDifficulty] = createSignal(0);

  setHideNav(true);
  onCleanup(() => setHideNav(false));
  setActivePage({ title: "Quiz", description: "Test your game knowledge through randomly generated multiple questions.", location: useLocation() });

  return (
    <div class="max-w-screen-lg p-4 mx-auto gap-4 mb-4 mt-8">
      <Show
        when={show()}
        fallback={
          <>
            <div class="my-5 rounded-lg p-6 bg-gray-600">
              <div class="max-w-lg mx-auto">
                <h1 class="font-bold text-white text-2xl my-3">Test your game knowledge</h1>
                <p class="text-gray-200 mt-1 max-w-prose">
                  Play the multiple choice quiz and (im)prove what you know about Age of Empires 4. The difficulty of randomly generated questions increases if
                  you get more answers correct.
                </p>
                <ul class="list-disc text-gray-200 max-w-prose flex flex-col gap-2 pl-6 my-4">
                  <li>Landmarks and civivilization bonuses.</li>
                  <li>Availiblity of technologies, buildings and units</li>
                  <li>Research per age and unit costs</li>
                  <li>Which unit wins, or how many to one shot</li>
                </ul>
                <p class="text-gray-200 mt-1 max-w-prose">Try and get the longest streak and have fun!</p>
                <small class="text-gray-300 text-sm mt-4 block">Tip: You can also pick your answer using the keyboard (A, B, C or 1, 2, 3)</small>
                <div class="flex flex-col items-center mt-8">
                  <button
                    class="whitespace-nowrap inline-flex items-center gap-2 bg-gray-400 py-2 px-10 font-bold text-lg  outline outline-gray-800 rounded-md
             hover:outline-white/30 hover:bg-gray-400/50 active:bg-white active:text-black"
                    onClick={() => setShow(true)}
                  >
                    Start
                  </button>
                  <button
                    onClick={() => setDifficulty(80) && setShow(true)}
                    class="fond-bold underline underline-offset-2 text-sm text-gray-300 p-2 active:outline outline-white"
                  >
                    Start without easy questions
                  </button>
                </div>
              </div>
            </div>

            <div class="my-5 rounded-lg p-6 bg-purple-600/20 flex items-center">
              <Icon icon="twitch" class="fab text-white mr-4 bg-purple-700 p-3 rounded-md" />
              <div>
                <strong class="font-bold">Play this quiz with your Twitch viewers</strong>
                <p class="text-sm opacity-70">Viewers can submit answers via chat and compete with each other</p>
              </div>
              <Link href="/quiz/twitch" class="ml-auto bg-white text-purple-900 font-bold px-6 py-2 rounded-full hover:bg-purple-200 active:text-black">
                Play
                <Icon icon="arrow-right" class=" ml-2" />
              </Link>
            </div>
          </>
        }
      >
        <Quiz difficulty={difficulty()} />
      </Show>
    </div>
  );
};

export default QuizRoute;
