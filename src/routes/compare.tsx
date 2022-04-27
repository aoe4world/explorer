import { createMemo, createResource, Show, Suspense } from "solid-js";
import { StatBar } from "../components/Stats";
import { globalAgeFilter } from "../components/Toolbar";
import { UnitCard } from "../components/UnitCard";
import { CIVILIZATIONS, ITEMS } from "../config";
import { fetchItem } from "../query/fetch";
import { calculateStatParts, getUnitStats } from "../query/stats";
import { modifierMatches } from "../query/utils";
import { civAbbr, Item, Modifier, Unit } from "../types/data";
import { CalculatedStats, Stat, StatProperty } from "../types/stats";

async function getComparer(unit: string, civAbbr: civAbbr) {
  const civ = CIVILIZATIONS[civAbbr];
  const item = await fetchItem(ITEMS.UNITS, unit);
  const stats = await getUnitStats(ITEMS.UNITS, item, civ);
  return { item, stats, civ };
}

export const CompareRoute = () => {
  const [ally] = createResource(() => getComparer("spearman", "en"));

  const [enemy] = createResource(() => getComparer("royal-knight", "fr"));

  const compareProps: Partial<StatProperty[]> = [
    "hitpoints",
    "attackSpeed",
    "moveSpeed",
    "meleeAttack",
    "meleeArmor",
    "rangedAttack",
    "rangedArmor",
    "fireAttack",
    "fireArmor",
  ];
  const netstats = createMemo(() =>
    compareProps.reduce((acc, prop) => {
      const att = calculateStatParts(ally()?.stats[prop], globalAgeFilter(), { target: enemy()?.item, decimals: 2 });
      const def = calculateStatParts(enemy()?.stats[prop], globalAgeFilter(), { target: ally()?.item, decimals: 2 });

      acc[prop] = { diff: att.total + att.bonus - def.total + def.bonus, ally: att, enemy: def };
      return acc;
    }, {} as Record<StatProperty, { diff: number; ally: CalculatedStats; enemy: CalculatedStats }>)
  );

  const attackTypes = ["melee", "ranged", "fire", "siege"] as const;

  const results = createMemo(() => {
    const attacks = attackTypes.reduce(
      (acc, type) => {
        const damage = netstats()?.[`${type}Attack`];
        const armor = netstats()?.[`${type}Armor`];
        acc.ally[type] = damage?.ally.max ? Math.round(Math.max(1, damage.ally.max - armor.enemy.max)) : 0;
        acc.enemy[type] = damage?.enemy.max ? Math.round(Math.max(1, damage.enemy.max - armor.ally.max)) : 0;
        return acc;
      },
      { ally: {}, enemy: {} } as Record<"ally" | "enemy", Record<typeof attackTypes[number], number>>
    );

    const [allyAttack, allyDamage] = Object.entries(attacks.ally).find(([key, value]) => value > 0) || ["", 0];
    const [enemyAttack, enemyDamage] = Object.entries(attacks.enemy).find(([key, value]) => value > 0) || ["", 0];

    const allyAttacksNeed = Math.ceil(netstats().hitpoints.enemy.max / allyDamage),
      enemyAttacksNeed = Math.ceil(netstats().hitpoints.ally.max / enemyDamage),
      allyAttackSpeed = netstats().attackSpeed.enemy.max,
      enemyAttackSpeed = netstats().attackSpeed.ally.max,
      allyTimeNeed = allyAttacksNeed * allyAttackSpeed,
      enemyTimeNeed = enemyAttacksNeed * enemyAttackSpeed,
      allyHealthLeft = Math.max(0, netstats().hitpoints.ally.max - Math.floor(allyTimeNeed / enemyAttackSpeed) * enemyDamage),
      enemyHealthLeft = Math.max(0, netstats().hitpoints.enemy.max - Math.floor(enemyTimeNeed / allyAttackSpeed) * allyDamage);

    const winner = allyTimeNeed < enemyTimeNeed ? "ally" : "enemy";
    return {
      ally: {
        attack: allyAttack,
        damage: allyDamage,
        attackSpeed: allyAttackSpeed,
        attacksNeeded: allyAttacksNeed,
        timeNeeded: allyTimeNeed,
        hpLeft: allyHealthLeft,
      },
      enemy: {
        attack: enemyAttack,
        damage: enemyDamage,
        attackSpeed: enemyAttackSpeed,
        attacksNeeded: enemyAttacksNeed,
        timeNeeded: enemyTimeNeed,
        hpLeft: enemyHealthLeft,
      },
      winner: winner,
    };
  });

  return (
    <>
      <div class="max-w-screen-lg p-4 mx-auto">
        <div class="flex gap-4">
          <Show when={!ally.loading && !enemy.loading && results()}>
            <div class="flex-auto flex flex-col gap-4">
              <p>
                The resulting {results().ally.attack} attack is {results().ally.damage} damage every {results().ally.attackSpeed}s so {ally().item.name} needs{" "}
                {results().ally.attacksNeeded} attacks and {results().ally.timeNeeded} seconds to kill {enemy().item.name} and has {results().ally.hpLeft} HP
                left.
              </p>
              {netstats().moveSpeed.ally.max > netstats().moveSpeed.enemy.max && <p>+ Can outrun/kite {enemy().item.name}</p>}
              <UnitCard unit={ally().item} civ={ally().civ}></UnitCard>
            </div>
            <div class="flex-auto">
              {results().winner === "ally" ? ally().item.name + " wins!" : enemy().item.name + " wins!"}
              <br />
            </div>
            <div class="flex-auto">
              <p>
                The resulting {results().enemy.attack} attack is {results().enemy.damage} damage every {results().enemy.attackSpeed}s so {enemy().item.name}{" "}
                needs {results().enemy.attacksNeeded} attacks and {results().enemy.timeNeeded} seconds to kill {ally().item.name} and has{" "}
                {results().enemy.hpLeft} HP left.
              </p>
              {netstats().moveSpeed.enemy.max > netstats().moveSpeed.ally.max && <p>+ Can outrun/kite {ally().item.name}</p>}
              <UnitCard unit={enemy().item} civ={enemy().civ}></UnitCard>
            </div>
          </Show>
        </div>
      </div>
    </>
  );
};
