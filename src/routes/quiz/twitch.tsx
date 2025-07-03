import { Link, useLocation, useParams } from "@solidjs/router";
import { Component, createSignal, onCleanup, Show, createEffect } from "solid-js";
import { Icon } from "@components/Icon";
import { TwitchQuiz } from "@components/quiz/TwitchQuiz";
import { setHideNav } from "../../global";
import { setActivePage } from "../../App";

export const QuizRoute: Component = () => {
  const query = useLocation().query;
  const [show, setShow] = createSignal(false);
  const [difficulty, setDifficulty] = createSignal(parseInt(query.difficulty ?? "0"));
  const [customDifficulty, setCustomDifficulty] = createSignal(!["0", "80"].includes(query.difficulty ?? "0"));
  const [channel, setChannel] = createSignal(useParams()?.channel ?? query.channel ?? "");
  const [gracePeriod, setGracePeriod] = createSignal(parseInt(query.gracePeriod ?? "5"));
  const [autoplaySpeed, setAutoplaySpeed] = createSignal(parseInt(query.autoplaySpeed ?? "15"));
  const [shareUrl, setShareUrl] = createSignal("");

  createEffect(() => {
    const url = new URL(window.location.href.split("?")[0]);
    if (channel()) url.searchParams.set("channel", channel());
    if (difficulty() !== 0) url.searchParams.set("difficulty", difficulty().toString());
    if (gracePeriod() !== 5) url.searchParams.set("gracePeriod", gracePeriod().toString());
    if (autoplaySpeed() !== 15) url.searchParams.set("autoplaySpeed", autoplaySpeed().toString());
    setShareUrl(url.toString());
  });

  setHideNav(true);
  onCleanup(() => setHideNav(false));
  setActivePage({
    title: `Quiz ${useParams().channel ? `(${useParams().channel})` : ""}`,
    description: "Test your game knowledge through randomly generated multiple questions.",
    location: useLocation(),
  });

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
                mode is great to turn on while you are taking a small break, but you are free to play along by selecting your own answers.
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
              <div class="grid grid-cols-7 gap-4 mt-4 text-black">
                <div class="col-span-3">
                  <label class="text-sm text-gray-300 mb-1 block">
                    Starting Difficulty
                    <button onClick={() => setCustomDifficulty(!customDifficulty())} class="px-1 rounded-md bg-gray-500/20 text-gray-300 h-full float-right">
                      <Icon icon={customDifficulty() ? "list-ol" : "edit"} />
                    </button>
                  </label>
                  <div class="flex items-center gap-2">
                    <Show
                      when={customDifficulty()}
                      fallback={
                        <div class="flex-grow flex items-center justify-center gap-2 bg-gray-500/20 p-1 rounded-md">
                          <span class={`px-2 text-sm ${difficulty() !== 80 ? "text-purple-400 font-bold" : "text-gray-300"}`}>Easy</span>
                          <label class="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={difficulty() === 80}
                              onChange={(e) => setDifficulty(e.currentTarget.checked ? 80 : 0)}
                              class="sr-only peer"
                            />
                            <div class="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                          <span class={`px-2 text-sm ${difficulty() === 80 ? "text-purple-400 font-bold" : "text-gray-300"}`}>Hard</span>
                        </div>
                      }
                    >
                      <input
                        type="number"
                        value={difficulty()}
                        onInput={(e) => setDifficulty(parseInt(e.currentTarget.value))}
                        class="w-full p-1 rounded-md"
                      />
                    </Show>
                  </div>
                </div>
                <div class="col-span-2">
                  <label for="autoplayspeed" class="text-sm text-gray-300 mb-1 block">
                    Autoplay Speed (s)
                  </label>
                  <input
                    id="autoplayspeed"
                    type="number"
                    value={autoplaySpeed()}
                    onInput={(e) => setAutoplaySpeed(parseInt(e.currentTarget.value))}
                    class="w-full p-1 rounded-md"
                  />
                </div>
                <div class="col-span-2">
                  <label for="graceperiod" class="text-sm text-gray-300 mb-1 block relative group">
                    Grace Period (s)
                    <Icon icon="info-circle" class="ml-1 text-gray-400" />
                    <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max p-2 bg-gray-800 text-white text-xs rounded-md hidden group-hover:block z-10">
                      Accounts for stream delay, giving viewers extra time after the timer expires.
                    </span>
                  </label>
                  <input
                    id="graceperiod"
                    type="number"
                    value={gracePeriod()}
                    onInput={(e) => setGracePeriod(parseInt(e.currentTarget.value))}
                    class="w-full p-1 rounded-md"
                  />
                </div>
              </div>
              {channel()?.length > 3 && (
                <div class="text-gray-300 text-sm mt-4">
                  Tip: Instantly start the quiz for your channel by navigating{" "}
                  <a href={shareUrl()} class="text-purple-400 underline">
                    here
                  </a>
                  .
                  <button onClick={() => navigator.clipboard.writeText(shareUrl())} class="ml-2 p-1 rounded-md bg-gray-500 text-white">
                    <Icon icon="copy" />
                  </button>
                </div>
              )}
            </div>
          </div>
        }
      >
        <TwitchQuiz difficulty={difficulty()} channel={channel()} gracePeriod={gracePeriod() * 1000} autoplaySpeed={autoplaySpeed() * 1000} />
      </Show>
    </div>
  );
};

export default QuizRoute;
