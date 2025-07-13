import { Link, useLocation, useParams } from "@solidjs/router";
import { Component, createSignal, onCleanup, Show, createEffect } from "solid-js";
import { Icon } from "@components/Icon";
import { TwitchQuiz } from "@components/quiz/TwitchQuiz";
import { ToggleSwitch } from "@components/common/ToggleSwitch";
import { tempHideNav } from "../../global";
import { setActivePage } from "../../App";

export const QuizRoute: Component = () => {
  const query = useLocation().query;
  const [show, setShow] = createSignal(false);
 const initialShowAdvancedSettings =
   !isNaN(parseInt(query.numQuestions)) ||
   parseInt(query.gracePeriod ?? "5") !== 5 ||
   parseInt(query.autoplaySpeed ?? "15") !== 15 ||
   !["0", "80"].includes(query.difficulty ?? "0");

 const [showAdvancedSettings, setShowAdvancedSettings] = createSignal(initialShowAdvancedSettings);
  const [difficulty, setDifficulty] = createSignal(parseInt(query.difficulty ?? "0"));
  const [customDifficulty, setCustomDifficulty] = createSignal(!["0", "80"].includes(query.difficulty ?? "0"));
  const [channel, setChannel] = createSignal(useParams()?.channel ?? query.channel ?? "");
  const [gracePeriod, setGracePeriod] = createSignal(parseInt(query.gracePeriod ?? "5"));
  const [autoplaySpeed, setAutoplaySpeed] = createSignal(parseInt(query.autoplaySpeed ?? "15"));
  const [shareUrl, setShareUrl] = createSignal("");
  const [numQuestions, setNumQuestions] = createSignal(parseInt(query.numQuestions));
  const [hideVotes, setHideVotes] = createSignal(query.hideVotes === "true");
  const [devMode, setDevMode] = createSignal(query.dev === "true");
  const questionsUrl = query.questionsUrl;

  createEffect(() => {
    const url = new URL(window.location.href.split("?")[0]);
    if (channel()) url.searchParams.set("channel", channel());
    if (difficulty() !== 0) url.searchParams.set("difficulty", difficulty().toString());
    if (gracePeriod() !== 5) url.searchParams.set("gracePeriod", gracePeriod().toString());
    if (autoplaySpeed() !== 15) url.searchParams.set("autoplaySpeed", autoplaySpeed().toString());
    if (questionsUrl) url.searchParams.set("questionsUrl", questionsUrl);
    if (numQuestions()) url.searchParams.set("numQuestions", numQuestions().toString());
    if (hideVotes()) url.searchParams.set("hideVotes", "true");
    if (devMode()) url.searchParams.set("dev", "true");
    setShareUrl(url.toString());
  });

  tempHideNav();
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
                  </label>
                  <div class="flex items-center gap-2">
                    <span class={`px-2 text-sm w-12 text-center ${difficulty() === 0 && !customDifficulty() ? "text-purple-400 font-bold" : "text-gray-300"}`}>Easy</span>
                    <ToggleSwitch
                      id="difficulty-toggle"
                      checked={customDifficulty() ? null : difficulty() === 80}
                      onChange={(checked) => {
                        setCustomDifficulty(false);
                        setDifficulty(checked ? 80 : 0);
                      }}
                    />
                    <span class={`px-2 text-sm w-12 text-center ${difficulty() === 80 && !customDifficulty() ? "text-purple-400 font-bold" : "text-gray-300"}`}>Hard</span>
                  </div>
                </div>
                <div class="col-span-4 flex justify-end items-start">
                  <button onClick={() => setShowAdvancedSettings(!showAdvancedSettings())} class="text-gray-300 text-sm flex items-center gap-1">
                    Advanced
                    <Icon icon={showAdvancedSettings() ? "chevron-up" : "chevron-down"} class="ml-1" />
                  </button>
                </div>
              </div>
              <Show when={showAdvancedSettings()}>
                <div class="mt-4 p-4 rounded-lg bg-gray-700 text-black">
                  <div class="grid grid-cols-3 gap-4 mb-4">
                    <h3 class="font-bold text-gray-300">Questions</h3>
                    <div class="col-span-1">
                      <label class="text-sm text-gray-300 mb-1 block">Number of Questions</label>
                      <input
                        type="number"
                        value={numQuestions()}
                        onInput={(e) => setNumQuestions(parseInt(e.currentTarget.value))}
                        placeholder="Unlimited"
                        class="w-full p-1 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label class="text-sm text-gray-300 mb-1 block">Custom Difficulty</label>
                      <input
                        type="number"
                        value={difficulty()}
                        onInput={(e) => {
                          setDifficulty(parseInt(e.currentTarget.value));
                          setCustomDifficulty(true);
                        }}
                        class="w-full p-1 rounded-md"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-3 gap-4 mt-4 mb-1">
                    <h3 class="font-bold text-gray-300 ">Autoplay</h3>
                    <div class="col-span-1">
                      <label for="autoplayspeed" class="text-sm text-gray-300 mb-1 block">
                        Speed (s)
                      </label>
                      <input
                        id="autoplayspeed"
                        type="number"
                        value={autoplaySpeed()}
                        onInput={(e) => setAutoplaySpeed(parseInt(e.currentTarget.value))}
                        class="w-full p-1 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
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
                  <div class="grid grid-cols-3 gap-4 mt-4 mb-1">
                    <h3 class="font-bold text-gray-300 ">Submissions</h3>
                    <div class="col-span-2 flex items-center">
                      <ToggleSwitch
                        id="hidevotes"
                        checked={hideVotes()}
                        onChange={setHideVotes}
                        label="Hide Viewer Submissions"
                        tooltip="Hide viewer votes until the voting period ends."
                      />
                    </div>
                  </div>
                </div>
              </Show>
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
        <TwitchQuiz
          difficulty={difficulty()}
          channel={channel()}
          gracePeriod={gracePeriod() * 1000}
          autoplaySpeed={autoplaySpeed() * 1000}
          questionsUrl={questionsUrl}
          numQuestions={numQuestions()}
          hideVotes={hideVotes()}
          dev={devMode()}
          onRestart={() => setShow(false)}
        />
      </Show>
    </div>
  );
};

export default QuizRoute;
