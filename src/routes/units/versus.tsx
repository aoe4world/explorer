import { Show, createResource, createEffect, createSignal, onCleanup } from "solid-js";
import { BattleReportView } from "@components/quiz/BattleReportView";
import * as SDK from "@data/sdk";
import { CIVILIZATION_BY_SLUG, CivSlug } from "@data/types/civs";
import { civConfig } from "../../types/data";
import { UnifiedItem, Unit } from "@data/types/items";
import { CIVILIZATIONS } from "@data/lib/config/civs";
import { useLocation, useSearchParams } from "@solidjs/router";
import { setActivePage, } from "../../App";
import { tempHideNav } from "../../global";
import { UnitSelector } from "@components/UnitSelector";

export const UnitVersusRoute = () => {
  const [searchParams, setSearchParams] = useSearchParams<{
    civ1?: CivSlug,
    unit1?: string,
    civ2?: CivSlug,
    unit2?: string,
    age1?: string,
    age2?: string
  }>();

  tempHideNav("hide-sidebar");

  const [data] = createResource(
    () => ({
      unitId1: searchParams.unit1,
      civSlug1: searchParams.civ1,
      unitId2: searchParams.unit2,
      civSlug2: searchParams.civ2,
      age1Str: searchParams.age1,
      age2Str: searchParams.age2
    }),
    ({ unitId1, civSlug1, unitId2, civSlug2, age1Str, age2Str }) => {
      const unit1 = SDK.units.get(unitId1);
      const civ1 = CIVILIZATION_BY_SLUG[civSlug1].abbr;
      const age1 = age1Str ? parseInt(age1Str) : undefined;
      const variation1 = unit1?.variations.filter((v) => v.civs.includes(civ1) && (!age1 || v.age <= age1)).sort((a, b) => a.age - b.age)[0];

      const unit2 = SDK.units.get(unitId2);
      const civ2 = civSlug2 ? CIVILIZATION_BY_SLUG[civSlug2].abbr : undefined;
      const age2 = age2Str ? parseInt(age2Str) : undefined;
      const variation2 = unit2?.variations.filter((v) => v.civs.includes(civ2) && (!age2 || v.age <= age2)).sort((a, b) => b.age - a.age)[0];

      return {
        unit1,
        unit2,
        variation1,
        variation2,
        age1: age1 ?? variation1?.age,
        age2: age2 ?? variation2?.age
      };
    });

  createEffect(() => {
    const { unit1, unit2 } = data() || {};
    setActivePage({ title: "Battle Report", description: `Battle Report - ${unit1?.name} vs ${unit2?.name}`, location: useLocation() });
  });

  const applyNewParams = (newParams: { civ1?: CivSlug, unit1?: string, civ2?: CivSlug, unit2?: string, age1?: number, age2?: number }) => {
    setSearchParams(newParams, { scroll: false });
  };

  const handleUnitSelect = (unit: UnifiedItem<Unit>, unitNumber: 1 | 2) => {
    const currentCivSlug = unitNumber === 1 ? searchParams.civ1 : searchParams.civ2;
    let newCivSlug: CivSlug;

    if (currentCivSlug && unit.civs.includes(CIVILIZATION_BY_SLUG[currentCivSlug].abbr)) {
      newCivSlug = currentCivSlug;
    } else {
      newCivSlug = CIVILIZATIONS[unit.civs[0]].slug;
    }

    if (unitNumber === 1) {
      applyNewParams({ civ1: newCivSlug, unit1: unit.id });
    } else {
      applyNewParams({ civ2: newCivSlug, unit2: unit.id });
    }
  };

  const handleCivSelect = (civ: civConfig, unitNumber: 1 | 2) => {
    if (unitNumber === 1) {
      applyNewParams({ civ1: civ.slug });
    } else {
      applyNewParams({ civ2: civ.slug });
    }
  };

  const handleAgeSelect = (age: number, unitNumber: 1 | 2) => {
    if (unitNumber === 1) {
      applyNewParams({ age1: age });
    } else {
      applyNewParams({ age2: age });
    }
  };

  return <div class="my-10 flex justify-center">
    <Show when={data()?.variation1} fallback={
      <div class="text-gray-200 text-center text-xl">Couldn't find unit...</div>
    }>
      <div class="grid grid-cols-[3fr_2fr_3fr] gap-4">
        <div>
          <UnitSelector
            unitId={searchParams.unit1}
            civSlug={searchParams.civ1}
            currentAge={searchParams.age1}
            selectedUnit={data()?.unit1}
            onSelect={(unit) => handleUnitSelect(unit, 1)}
            onAgeSelect={(age) => handleAgeSelect(age, 1)}
          />
        </div>
        <div class="col-start-3">
          <UnitSelector
            unitId={searchParams.unit2}
            civSlug={searchParams.civ2}
            currentAge={searchParams.age2}
            selectedUnit={data()?.unit2}
            onSelect={(unit) => handleUnitSelect(unit, 2)}
            onAgeSelect={(age) => handleAgeSelect(age, 2)}
          />
        </div>
        <Show when={data()?.variation1}>
          <div class="col-span-3 max-w-6xl w-[72rem] w-full">
            <BattleReportView unit1={data()?.unit1} unit2={data()?.unit2} variation1={data()?.variation1} variation2={data()?.variation2} age1={data()?.age1} age2={data()?.age2} onCivSelect={handleCivSelect} />
          </div>
        </Show>
      </div>
    </Show>
  </div>
};
