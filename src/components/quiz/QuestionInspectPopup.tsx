import { Component, Show, createResource } from "solid-js";
import { ITEMS, UnifiedItem, Unit } from "../../types/data";
import { BattleReportView } from "./BattleReportView";
import { Question, QuestionItem } from "./questions";
const SDK = import("@data/sdk");

type ResolvedQuestionItem = QuestionItem & { unit: UnifiedItem<Unit> | undefined; variation: Unit | undefined; };

export const QuestionInspectPopup: Component<{ question: Question; onClose: () => void }> = (props) => {
  const [units] = createResource(() => props.question.items, async (items) => {
    const sdk = await SDK;
    const result = items.filter(v => v.group === ITEMS.UNITS).map(itemData => {
      const unit = sdk.units.get(itemData.baseId) as UnifiedItem<Unit> | undefined;
      const variation = unit?.variations.filter(variation => variation.id === itemData.id && variation.civs.includes(itemData.civ) && variation.age === itemData.age)[0];
      return {
        ...itemData,
        unit,
        variation
      } as ResolvedQuestionItem;
    });
    return result;
  }, { initialValue: [] });

  return (
    <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-5xl w-full relative">
        <button class="absolute top-3 right-3 text-gray-400 hover:text-white" onClick={() => props.onClose()}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="mt-4">
          <Show when={units()[0]?.unit && units()[0]?.variation} fallback={<div class="text-center text-gray-300">Loading unit data...</div>}>
            <BattleReportView unit1={units()[0].unit!} unit2={units()[1]?.unit} variation1={units()[0].variation!} variation2={units()[1]?.variation} />
          </Show>
        </div>
      </div>
    </div>
  );
};
