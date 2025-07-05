import { Component, createSignal, For, Show, createMemo } from "solid-js";
import { TWITCH } from '../../../assets';
import { createStore } from "solid-js/store";
import { Icon } from "../Icon";
import { Scores, TwitchUser } from "./TwitchQuiz";
import { ToggleSwitch } from "@components/common/ToggleSwitch";
import { Random } from "./random";

interface TwitchGiveawayProps {
  scores: Scores;
  users: Record<string, TwitchUser>;
  channel: string;
  onClose: () => void;
}

export const TwitchGiveaway: Component<TwitchGiveawayProps> = (props) => {
  const [minCandidates, setMinCandidates] = createSignal(5);
  const [excludeMods, setExcludeMods] = createSignal(true);
  const [excludeNonSubs, setExcludeNonSubs] = createSignal(false);
  const [excludedViewers, setExcludedViewers] = createStore<string[]>([]);
  const [winner, setWinner] = createSignal<TwitchUser>(null);

  const viewers = createMemo(() => {
    return props.scores.viewers
      .map(s => ({ ...s, user: props.users[s.username] }))
      .filter(c => c.user) // filter out users that might not be in the users object for some reason
      .filter(c => c.user.username.toLowerCase() !== props.channel.toLowerCase()) // exclude streamer
  });

  const prefilteredCandidates = createMemo(() => {
    return viewers()
      .filter(c => !excludeMods() || !c.user.moderator)
      .filter(c => !excludeNonSubs() || c.user.subscriber)
  });

  const candidates = createMemo(() => {
    const eligible = prefilteredCandidates().filter(c => !excludedViewers.includes(c.user.username));
    if (!eligible.length) return [];

    const topScore = eligible[0].correct;

    let result = [];
    let included = 0;

    prefilteredCandidates().forEach(candidate => {
      if (candidate.correct === topScore || included < minCandidates()) {
        result.push(candidate);
        if (!excludedViewers.includes(candidate.user.username))
          included += 1;
      }
    });

    return result;
  });

  const filteredCandidates = createMemo(() => {
    return candidates().filter(c => !excludedViewers.includes(c.user.username));
  });

  const drawWinner = () => {
    if (filteredCandidates().length > 0) {
      const drawnWinner = Random.pick(filteredCandidates());
      setWinner(drawnWinner.user);
    }
  };

  const toggleViewerExclusion = (username: string) => {
    if (excludedViewers.includes(username)) {
      setExcludedViewers(p => p.filter(u => u !== username));
    } else {
      setExcludedViewers(p => [...p, username]);
    }
  };

  const reset = () => {
    setWinner(null);
  }

  const copyNamesToClipboard = () => {
    const names = filteredCandidates().map(c => c.user.display_name).join('\n');
    navigator.clipboard.writeText(names);
  };

  return (
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-gray-700 rounded-lg p-6 w-full max-w-2xl text-white flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Giveaway</h2>
          <button onClick={props.onClose}><Icon icon="xmark" /></button>
        </div>

        <Show when={winner()} fallback={
          <>
            <div class="grid grid-cols-3 gap-4 p-4 bg-gray-800 rounded-lg">
              <div class="flex items-center">
                <input type="number" value={minCandidates()} onInput={e => setMinCandidates(parseInt(e.currentTarget.value))} class="mr-2 w-12 p-1 rounded-md text-black" />
                <label class="text-sm text-gray-300 block">Min. Candidates</label>
              </div>
              <div class="flex items-center">
                <ToggleSwitch id="exclude-mods" checked={excludeMods()} onChange={setExcludeMods} label="Exclude Mods" />
              </div>
              <div class="flex items-center">
                <ToggleSwitch id="exclude-subs" checked={excludeNonSubs()} onChange={setExcludeNonSubs} label="Exclude Non-Subs" />
              </div>
            </div>

            <div class="my-4 flex-auto overflow-y-auto">
              <h3 class="font-bold">{filteredCandidates().length} of {viewers().length} viewers in the giveaway <button onClick={copyNamesToClipboard} class="text-xs text-gray-400 hover:underline">(copy names)</button></h3>
              <div class="grid grid-cols-2 gap-2 mt-2">
                <For each={candidates()}>
                  {candidate => {
                    const isExcluded = () => excludedViewers.includes(candidate.user.username);
                    return (
                      <div class={`flex items-center gap-2 p-2 bg-gray-600 rounded ${isExcluded() ? 'opacity-50' : ''}`}>
                        <ToggleSwitch id={`user-${candidate.user.username}`} checked={!isExcluded()} onChange={() => toggleViewerExclusion(candidate.user.username)} size="small" />
                        <span class="truncate" style={{ color: candidate.user.color }}>{candidate.user.display_name}</span>
                        {candidate.user.moderator && <img src={TWITCH.moderator} class="h-4 object-contain w-4" title="Moderator" />}
                        {candidate.user.subscriber && <img src={TWITCH.subscriber} class="h-4 object-contain w-4" title="Subscriber" />}
                        <span class="ml-auto mr-2 text-sm text-gray-300">{candidate.correct} / {candidate.total}</span>
                      </div>
                    )
                  }}
                </For>
              </div>
            </div>

            <button onClick={drawWinner} disabled={filteredCandidates().length === 0} class="w-full bg-purple-500 p-4 rounded font-bold text-xl disabled:bg-gray-500">
              Draw Winner
            </button>
          </>
        }>
          <div class="text-center p-8">
            <h3 class="text-xl">The winner is...</h3>
            <h2 class="text-4xl font-bold my-4" style={{ color: winner().color }}>{winner().display_name}</h2>
            <p>Congratulations!</p>
            <div class="flex gap-4 justify-center mt-8">
              <button onClick={reset} class="bg-gray-500 p-2 rounded">Draw Again</button>
              <button onClick={props.onClose} class="bg-purple-500 p-2 rounded">Close</button>
            </div>
          </div>
        </Show>
      </div>
    </div>
  );
};
