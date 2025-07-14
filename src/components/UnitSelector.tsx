import { Component, createSignal, For, createMemo, Show } from "solid-js";
import { useNavigate, useParams, useSearchParams } from "@solidjs/router";
import * as SDK from "@data/sdk";
import { ItemIcon } from "./ItemIcon";
import { UnifiedItem, Unit } from "@data/types/items";
import { Icon } from "./Icon";
import { CivSlug } from "@data/types/civs";
import { CIVILIZATIONS } from "@data/lib/config/civs";
import { PRETTY_AGE_MAP_SHORT } from "../config";

interface UnitSelectorProps {
  unitId?: string;
  civSlug?: CivSlug;
  currentAge?: string;
  selectedUnit?: UnifiedItem<Unit>;
  onSelect: (unit: UnifiedItem<Unit>) => void;
  onAgeSelect: (age: number) => void;
}

export const UnitSelector: Component<UnitSelectorProps> = (props) => {
  const [searchTerm, setSearchTerm] = createSignal("");

  const filteredUnits = createMemo(() => {
    const term = searchTerm().toLowerCase();
    if (!term) {
      return SDK.units;
    }
    return SDK.units.filter(unit => unit.name.toLowerCase().includes(term));
  });

  const handleSelectUnit = (unit: UnifiedItem<Unit>) => {
    props.onSelect(unit);
    setSearchTerm(""); // Clear search after selection
  };

  return (
    <div class="relative flex gap-2">
      <input
        type="text"
        placeholder="Search for a unit..."
        class="flex-grow p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm()}
        onInput={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <select
        class="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
        value={props.currentAge || ""}
        onInput={(e) => props.onAgeSelect(parseInt(e.currentTarget.value))}
      >
        <For each={props.selectedUnit ? Array.from({ length: 4 - props.selectedUnit.minAge + 1 }, (_, i) => props.selectedUnit!.minAge + i) : [1, 2, 3, 4]}>
          {(age) => <option value={age}>{PRETTY_AGE_MAP_SHORT[age]}</option>}
        </For>
      </select>
      <Show when={searchTerm()}>
        <div class="absolute z-10 w-full bg-gray-800 border border-gray-700 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg top-full left-0 right-0">
          <For each={filteredUnits()}>
            {(unit) => (
              <div
                class="flex items-center p-2 cursor-pointer hover:bg-gray-700"
                onClick={() => handleSelectUnit(unit)}
              >
                <ItemIcon item={unit} size={6} class="mr-2" />
                <span>{unit.name}</span>
              </div>
            )}
          </For>
          <Show when={filteredUnits().length === 0}>
            <div class="p-2 text-gray-400">No units found.</div>
          </Show>
        </div>
      </Show>
    </div>
  );
};
