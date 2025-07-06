import { Component, Show, createResource, createMemo } from "solid-js";
import { Question, VersusUnit } from "./questions";
import * as SDK from "@data/sdk";
import { UnifiedItem, Unit, civConfig } from "../../types/data";
import { BattleReportView } from "./BattleReportView";
import { getMostAppropriateVariation } from "../../query/utils";
import { CIVILIZATION_BY_SLUG } from "../../config";

export const QuestionInspectPopup: Component<{ question: Question; onClose: () => void }> = (props) => {
  const units = createMemo(() => props.question.versus.map(unitData => {
    const unit = SDK.units.get(unitData.baseId);
    const variation = unit.variations.filter(variation => variation.id === unitData.id && variation.civs.includes(unitData.civ) && variation.age === unitData.age)[0];
    return {
      unitData,
      unit,
      variation
    };
  }));

  return (
    <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-5xl w-full relative">
        <button class="absolute top-3 right-3 text-gray-400 hover:text-white" onClick={props.onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="mt-4">
          <Show when={units()[0] && units()[1]} fallback={<div class="text-center text-gray-300">Loading unit data...</div>}>
            <BattleReportView unit1={units()[0].unit} unit2={units()[1].unit} variation1={units()[0].variation} variation2={units()[1].variation} />
          </Show>
        </div>
      </div>
    </div>
  );
};
