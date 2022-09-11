import { Component, createEffect, createResource, createSignal, For, JSX, Show, Suspense } from "solid-js";
import { RESOURCES } from "../../../assets";
import { ResourceType } from "../../../components/parsing/types";
import { Item, ItemClass, UnifiedItem } from "../../../data/src/types/items";
import { CivFlag } from "../../components/CivFlag";
import { Icon } from "../../components/Icon";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG, ITEMS, ItemTypes, PRETTY_AGE_MAP, PRETTY_AGE_MAP_LONG } from "../../config";
import { calculateStatParts, getUnitStats } from "../../query/stats";
import { getMostAppropriateVariation, modifierMatches } from "../../query/utils";
import { civConfig, Unit } from "../../types/data";
import { Random } from "./random";
const SDK = import("../../../data/src/sdk");

export type Question = {
  question: string;
  note?: string;
  answers: JSX.Element[];
  correctAnswer: number;
};

const levels = {
  beginner: { passAfter: 3, chance: 0, questions: [getCivLandmarkQuestion, getCivBonusQuestion] },
  easy: { passAfter: 5, chance: 0.1, questions: [getCivHasAccessQuestion, getAgeRequirementQuestion, getCivLandmarkQuestion] },
  medium: { passAfter: 10, chance: 0.2, questions: [getCostQuestion] },
  hard: { passAfter: 15, chance: 0.3, questions: [getStraightUpFightQuestion, getCostQuestion] },
  expert: { passAfter: 30, chance: 0.1, questions: [getOneShotQuestion] },
};

export async function getRandomQuestion(i?: number, civ?: civConfig): Promise<Question> {
  //   return getStraightUpFightQuestion(i, civ);
  try {
    for (const level of Object.values(levels)) {
      if (i < level.passAfter || Random.chance(Math.max(level.passAfter / i / 2, level.chance))) {
        return Random.pick(level.questions)(i, civ);
      }
    }
  } catch (e) {
    console.error(e);
  }
  return getRandomQuestion(i, civ);
}

/**
 * EASY
 * "Which French landmark is described?"
 */
async function getCivLandmarkQuestion(i?: number, civ?: civConfig): Promise<Question> {
  civ ??= Random.pick(Object.values(CIVILIZATIONS).filter((c) => c.abbr !== "ab"));
  const historyId = `landmark-${civ.abbr}`;
  const history = randomPickedHistory.get(historyId) ?? randomPickedHistory.set(historyId, new Set()).get(historyId);
  const buildings = (await SDK).buildings.where({ civilization: civ?.abbr });
  const landmarks = buildings.filter((b) => b.classes.includes("landmark") && !["wynguard-palace"].includes(b.id));

  const correctOptions = landmarks.filter((l) => !history.has(l.id));
  if (!correctOptions.length) {
    history.clear();
    return getCivLandmarkQuestion(i, civ);
  }

  const correctLandmark = Random.pick(correctOptions);
  history.add(correctLandmark.id);

  const otherLandmarks = Random.order(landmarks.filter((l) => l.id !== correctLandmark.id)).slice(0, 2);
  const options = Random.order([correctLandmark, ...otherLandmarks]);
  return {
    question: `Which ${civ.name} landmark is described?`,
    note: `"${correctLandmark.description.replace(correctLandmark.name, "landmark")}"`,
    answers: options.map((l) => (
      <>
        <img src={l.icon} class="w-8 bg-item-building rounded-sm" /> {l.name}
      </>
    )),
    correctAnswer: options.indexOf(correctLandmark),
  };
}

/**
 * EASY
 * "Which civ has the following bonus?"
 */

async function getCivBonusQuestion(i?: number, _?: civConfig): Promise<Question> {
  const history = getOrCreateHistory("civ-bonus");
  const allCivs = Object.values(CIVILIZATIONS);
  if (history.size >= allCivs.length * 4) history.clear();
  const civs = Random.order(allCivs).slice(0, 3);
  const civ = Random.pick(civs);
  const bonuses = (await SDK).civilizations.Get(civ.abbr).info.overview.find((o) => o.title === "Civilization Bonuses")?.list ?? [];
  const bonus = Random.pick(bonuses);
  if (!bonuses.length || history.has(bonus) || (bonus.includes("Berry") && ["de", "ab"].every((abbr) => civs.some((cv) => cv.abbr == abbr))))
    return getCivBonusQuestion(i);
  history.add(bonus);
  return {
    question: `Which civilization has the following bonus?`,
    note: `"${bonus}"`,
    answers: civs.map(formatCiv),
    correctAnswer: civs.indexOf(civ),
  };
}

/**
 * MEDIUM
 * "From which age can you research wheelbarrow?"
 */
async function getAgeRequirementQuestion(i?: number, civ?: civConfig): Promise<Question> {
  const research = await getRandomItem("research-age", [ITEMS.TECHNOLOGIES], civ);
  return {
    question: `From which age on can ${research.unique ? "the " + CIVILIZATIONS[research.civs[0]].name : "you"} research ${research.name}?`,
    answers: [PRETTY_AGE_MAP_LONG[1], PRETTY_AGE_MAP_LONG[2], PRETTY_AGE_MAP_LONG[3], PRETTY_AGE_MAP_LONG[4]],
    correctAnswer: research.minAge - 1,
    note: `"${research.description}"`,
  };
}

/**
 * MEDIUM
 * "Which civilization can research Honed Blades?"
 */
async function getCivHasAccessQuestion(i?: number, civ?: civConfig): Promise<Question> {
  const item = await getRandomItem("civHasAccess", [ITEMS.BUILDINGS, ITEMS.UNITS, ITEMS.TECHNOLOGIES], civ, [], ["landmark", "wonder"]);
  if (item.civs.length >= 7) return getCivHasAccessQuestion(i, civ);
  const itemProduceVerb = {
    building: "build",
    unit: "produce",
    technology: "research",
  };
  if (item.civs.length >= 4) {
    const correctCiv = Random.pick(Object.values(CIVILIZATIONS).filter((c) => !item.civs.includes(c.abbr)));
    const incorrectCiv = Random.order(item.civs)
      .slice(0, 2)
      .map((c) => CIVILIZATIONS[c]);
    const options = Random.order([correctCiv, ...incorrectCiv]);

    return {
      question: `Which civilization is unable to ${itemProduceVerb[item.type]} ${item.name}?`,
      note: "",
      correctAnswer: options.indexOf(correctCiv),
      answers: options.map(formatCiv),
    };
  } else {
    const correctCiv = CIVILIZATIONS[Random.pick(item.civs)];
    const incorrectCiv = Random.order(Object.values(CIVILIZATIONS).filter((c) => !item.civs.includes(c.abbr))).slice(0, 2);
    const options = Random.order([correctCiv, ...incorrectCiv]);
    return {
      question: `Which civilization can ${itemProduceVerb[item.type]} ${item.name}?`,
      note: "",
      correctAnswer: options.indexOf(correctCiv),
      answers: options.map(formatCiv),
    };
  }
}

/**
 * HARD
 * "What is the cost of Boachoan?"
 */
async function getCostQuestion(i?: number, civ?: civConfig): Promise<Question> {
  const excludeIds = ["trade-wing", "economic-wing", "military-wing", "trade-wing", "culture-wing"];
  const excludeClasses: ItemClass[] = ["landmark", "wonder"];
  const item = await getRandomItem("cost-question", [ITEMS.UNITS, ITEMS.BUILDINGS], civ, excludeIds, excludeClasses);
  const variation = getMostAppropriateVariation(item, civ);
  const { popcap, time, total, ...costs } = variation.costs;

  const correctAnswer = costs;
  let question = `What is the cost of a ${variation.name}?`,
    note = `Standard cost, without any civ or landmark discounts`,
    answers = [costs];

  // Add incorrect answers until there are 3, and ensure there are no duplicates
  let attempts = 0;
  while (answers.length < 3) {
    const incorrectAnswer = getIncorrectCosts(costs);
    if (Object.values(incorrectAnswer).some((i) => i > 0) && answers.every((a) => Object.keys(incorrectAnswer).some((k) => a[k] != incorrectAnswer[k]))) {
      answers.push(incorrectAnswer);
    } else if (attempts > 4) {
      console.warn("Could not generate suitable answer for");
      return getCostQuestion(i, civ);
    }
    attempts++;
  }

  answers = Random.order(answers);

  return {
    question,
    note,
    answers: answers.map(formatCosts),
    correctAnswer: answers.indexOf(correctAnswer),
  };
}

/**
 * HARD
 * "Which unit wins in a straight up fight?"
 */

async function getStraightUpFightQuestion(i?: number, civ?: civConfig): Promise<Question> {
  console.log(Random.chance(0.9), Random.chance(0.9), Random.chance(0.9), Random.chance(0.9), Random.chance(0.9), Random.chance(0.9));
  const units: Unit[] = [];
  const excludeClasses: ItemClass[] = [
    "worker",
    "religious",
    "ship",
    ...(Random.chance(0.2) ? (["cavalry", "infantry"] as ItemClass[]) : (["warship", "siege"] as ItemClass[])),
  ];
  console.log(excludeClasses);
  let attempts = 0;
  while (units.length < 2) {
    attempts++;
    if (attempts > 20) {
      console.warn("Could not generate suitable matchup");
      return getStraightUpFightQuestion(i, civ);
    }
    const unit = getMostAppropriateVariation<Unit>(await getRandomItem("straight-up-fight", [ITEMS.UNITS], civ, ["battering-ram"], excludeClasses), civ);
    if (unit.weapons.filter((w) => w.type != "fire")?.length !== 1) continue; // || units.find((u) => u.hitpoints > unit.hitpoints * 8 || unit.hitpoints > u.hitpoints * 8)) continue;
    units.push(unit);
  }
  console.log(units.map((u) => u.name).join(" vs "));

  const options = Random.order(units);

  const winner = battleUnits(options[0], options[1]);

  return {
    question: `Which unit wins in a straight up fight?`,
    note: `Without any upgrades, kiting or special attacks or influences. Last one standing wins.`,
    answers: [
      ...options.map((u) => (
        <>
          {u.name} <span class="opacity-50 ml-2">{PRETTY_AGE_MAP_LONG[u.age]}</span>
        </>
      )),
      "It's a draw",
    ],
    correctAnswer: winner === false ? 2 : options.indexOf(winner),
  };
}

/**
 * EXPERT
 * "How many archers does it take to one-shot a horseman?"
 */
async function getOneShotQuestion(i?: number, civ?: civConfig): Promise<Question> {
  const rangedUnit = await getRandomItem("oneshot", [ITEMS.UNITS], civ, ["khan"], ["worker", "melee", "religious", "ship", "warship"]);

  const targetUnit = await getRandomItem(
    "oneshot-target",
    [ITEMS.UNITS],
    undefined,
    [],
    rangedUnit.classes.includes("siege") ? ["ranged", "worker", "religious"] : ["ship", "siege", "warship"]
  );

  const ranged = getMostAppropriateVariation(rangedUnit, civ);
  if (!ranged.weapons.length) return getOneShotQuestion(i, civ);
  const target = getMostAppropriateVariation<Unit>(targetUnit, civ);
  const attack = getBattleStats(ranged, target);

  if (!attack.damage || attack.attacksRequired > 30) return getOneShotQuestion(i, civ);

  const shots = attack.attacksRequired;

  const options = [
    shots,
    Random.integer(shots * 1.5),
    Random.integer(shots / 2),
    Math.max(1, shots - Random.pick(1, 2, 3)),
    Math.min(Math.ceil(shots * 1.2), Random.integer(shots * 1.5)),
    shots + 1,
    shots + 2,
  ]
    .filter((o, i, a) => a.findIndex((n) => n == o) == i && o > 0)
    .slice(0, 3);
  const answers = options.sort((a, b) => a - b);
  const correctAnswer = answers.indexOf(shots);

  return {
    question: `How many ${PRETTY_AGE_MAP[ranged.age]} ${ranged.name}s does it take to one-shot a ${PRETTY_AGE_MAP[target.age]}  ${target.name}?`,
    answers: options.map((x) => `${x} ${x === 1 ? ranged.name : `${ranged.name}s`}`),
    correctAnswer,
    note: `Without any blacksmith or university upgrades`,
  };
}

/**
 * Helper functions
 */

const formatCosts = (costs: Record<ResourceType, number>) =>
  Object.entries(costs).map(([key, value]) =>
    value ? (
      <>
        <img src={RESOURCES[key]} class="h-4 object-contain w-5" /> {value}
      </>
    ) : undefined
  );

const getIncorrectCosts = (correct: Record<ResourceType, number>) => {
  const costs = Object.fromEntries(Object.entries(correct).filter(([k, v]) => v > 0)) as Record<ResourceType, number>;
  const { gold, food, wood, stone } = costs;

  const fuckitUps = [
    () =>
      // Double a cost
      (costs[Random.key(costs)] *= 2),
    () => {
      const key = Random.key(costs);
      costs[key] = Math.floor(costs[key] * Random.pick(0.05, 0.02)) * 10;
    },
    () => (costs[Random.key(costs)] = 0),
    () => {
      // Flip resources
      if (wood && !gold) {
        costs.gold = wood;
        costs.wood = 0;
      } else if (gold && !wood) {
        costs.wood = gold * 2;
        costs.gold = 0;
      } else if (stone && !wood) {
        costs.wood = stone * 2;
        costs.stone = 0;
      } else {
        costs[Random.key(costs)] = 0;
        costs[Random.pick(stone, gold)] = Math.max(food, wood, gold, stone);
      }
    },
  ];

  Random.pick(fuckitUps)();
  if (Random.coinflip()) Random.pick(fuckitUps)();
  return costs;
};

function getBattleStats(attacker: Unit, target: Unit) {
  const weapon = attacker.weapons.filter((w) => w.type != "fire")[0];
  const { speed, damage, type } = weapon;
  const armor = target.armor.find((ar) => ar.type == type)?.value || 0;
  const bonusDamage =
    weapon.modifiers
      ?.filter((m) => modifierMatches(m.target, target).any)
      ?.reduce((acc, b) => acc + (b.effect == "change" ? b.value : damage - damage * b.value), 0) ?? 0;
  const hp = target.hitpoints;
  const netDamage = Math.max(1, damage + bonusDamage - armor);
  const attacksRequired = Math.ceil(hp / netDamage);
  const timeRequired = attacksRequired * speed;
  const netDps = netDamage / speed;
  return {
    timeRequired,
    attacksRequired,
    weapon,
    armor,
    damage,
    bonusDamage,
    hp,
    netDamage,
    netDps,
  };
}

function battleUnits(a: Unit, b: Unit) {
  const aTime = getBattleStats(a, b).timeRequired;
  const bTime = getBattleStats(b, a).timeRequired;
  return aTime == bTime ? false : aTime < bTime ? a : b;
}

function formatCiv(civ: civConfig) {
  return (
    <>
      <CivFlag abbr={civ.abbr} class="w-4" />
      {civ.name}
    </>
  );
}

const randomPickedHistory = new Map<string, Set<string>>();
function getOrCreateHistory(key: string) {
  return randomPickedHistory.get(key) ?? randomPickedHistory.set(key, new Set()).get(key);
}
async function getRandomItem<T extends ITEMS>(
  historyKey: string,
  types: T[],
  civ: civConfig,
  excludeIds: string[] = [],
  excludeClasses: ItemClass[] = []
): Promise<UnifiedItem<ItemTypes[T]>> {
  const Sdk = await SDK;
  const history = getOrCreateHistory(historyKey);
  const items = Sdk[Random.pick(types)].where({ civilization: civ?.abbr });
  const item = Random.pick(
    items.filter((i) => !excludeIds.includes(i.id) && !history.has(i.id) && !i.classes.some((c) => excludeClasses.includes(c)))
  ) as UnifiedItem<ItemTypes[T]>;
  if (!item) {
    history.clear();
    return getRandomItem(historyKey, types, civ, excludeIds, excludeClasses);
  }
  history.add(item.id);
  return item;
}
