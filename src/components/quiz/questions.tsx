import { JSX } from "solid-js";
import { RESOURCES } from "../../../assets";
import * as SDK from "@data/sdk";
import { ItemClass, UnifiedItem } from "@data/types/items";
import { CivFlag } from "@components/CivFlag";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG, ITEMS, ItemTypes, PRETTY_AGE_MAP, PRETTY_AGE_MAP_LONG } from "../../config";
import { getMostAppropriateVariation, modifierMatches } from "../../query/utils";
import { civAbbr, civConfig, Unit } from "../../types/data";
import { ItemIcon } from "../ItemIcon";
import { formatSecondsToTime } from "../Stats";
import { Random } from "./random";

export type Question = {
  question: string;
  note?: string;
  answers: Answer[];
  correctAnswer: number;
  versus?: [VersusUnit, VersusUnit];
};

export type VersusUnit = {
  id: string;
  baseId: string;
  civ: civAbbr;
  age: number;
}

export type AnswerDefinition = {
  type: "civ" | "resource" | "text" | "unit" | "building" | "technology" | "costs";
  id?: string;
  label?: string;
  costs?: ResourceCosts;
};

type Answer = AnswerDefinition | string;

type ResourceType = "food" | "wood" | "gold" | "stone" | "oliveoil";

type ResourceCosts = Partial<Record<ResourceType, number>>;

type LevelDefinition = {
  difficulty: number;
  maxDifficulty?: number;
  chance: number;
  questions: (QuestionFunc | Question)[];
};

type QuestionFunc = (i?: number, civ?: civConfig) => Promise<Question>;

const baseLevels = {
  beginner: { difficulty: 0, maxDifficulty: 10, chance: 1, questions: [getCivLandmarkQuestion, getCivBonusQuestion, getCivHasAccessQuestion] },
  easy: { difficulty: 5, maxDifficulty: 20, chance: 0.5, questions: [getAgeRequirementQuestion] },
  medium: { difficulty: 10, maxDifficulty: undefined, chance: 0.4, questions: [getCostQuestion] },
  hard: { difficulty: 15, maxDifficulty: undefined, chance: 0.2, questions: [getStraightUpFightQuestion] },
  expert: { difficulty: 20, maxDifficulty: undefined, chance: 0.2, questions: [getOneShotQuestion, getTimeQuestion] },
};

let levels: Record<string, LevelDefinition> = baseLevels;

export async function loadCustomQuestions(url: string) {
  if (!url) {
    levels = baseLevels;
    return;
  }
  console.log(`Loading custom questions from ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch custom questions: ${response.statusText}`);
    const customData = await response.json();

    const newLevels = Object.fromEntries(
      Object.entries(baseLevels).map(([levelName, value]) => [levelName, { ...value, questions: [...value.questions] }])
    );

    if (customData.level_overrides) {
      console.log(`Loading level_overrides...`);
      for (const levelName in customData.level_overrides) {
        if (newLevels[levelName]) {
          Object.assign(newLevels[levelName], customData.level_overrides[levelName]);
        } else {
          newLevels[levelName] = customData.level_overrides[levelName];
        }
      }
    }

    if (customData.additional_questions) {
      console.log(`Loading additional_questions...`);
      Object.assign(newLevels, customData.additional_questions);
    }

    levels = newLevels as typeof baseLevels;
  } catch (e) {
    console.error(e);
    levels = baseLevels;
  }
}

const RECENTLY_ASKED_LIMIT = 30;
const MAX_ATTEMPTS = 20;
const recentlyAsked: string[] = [];

export async function getRandomQuestion(difficulty?: number, civ?: civConfig): Promise<Question | null> {
  difficulty = Math.max(0, difficulty);
  console.log(`Getting random question at ${difficulty} difficulty...`);
  let attempts = 0;
  while (attempts < MAX_ATTEMPTS) {
    try {
      for (const level of Object.values(levels).reverse()) {
        if (difficulty >= level.difficulty && (level.maxDifficulty == undefined || level.maxDifficulty > difficulty) && Random.chance(level.chance)) {
          if (!level.questions.length) continue;
          const questionOrFunc = Random.pick(level.questions);
          let question: Question;
          if (typeof questionOrFunc === "function") {
            question = await questionOrFunc(difficulty, civ);
          } else if (typeof questionOrFunc === "object" && questionOrFunc !== null) {
            question = questionOrFunc;
          }
          if (question) {
            const hash = JSON.stringify(question);
            if (recentlyAsked.includes(hash)) continue;
            recentlyAsked.push(hash);
            if (recentlyAsked.length > RECENTLY_ASKED_LIMIT) recentlyAsked.shift();
            return question;
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
    attempts++;
  }
  console.warn(`Could not generate a question after ${MAX_ATTEMPTS} attempts.`);
  return null;
}

/**
 * EASY
 * "Which French landmark is described?"
 */
async function getCivLandmarkQuestion(i?: number, civ?: civConfig): Promise<Question> {
  civ ??= Random.pick(Object.values(CIVILIZATIONS).filter((c) => c.abbr !== "ab")) as unknown as civConfig;
  const historyId = `landmark-${civ.abbr}`;
  const history = randomPickedHistory.get(historyId) ?? randomPickedHistory.set(historyId, new Set()).get(historyId);
  const buildings = SDK.buildings.where({ civilization: civ?.abbr });
  const landmarks = buildings.filter((b) => b.classes.includes("landmark") && !["wynguard-palace", "capital-town-center"].includes(b.id));

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
    answers: options.map((l) => ({ type: "building", id: l.id })),
    correctAnswer: options.indexOf(correctLandmark),
  };
}

/**
 * EASY
 * "Which civ has the following bonus?"
 */

async function getCivBonusQuestion(i?: number, _?: civConfig): Promise<Question> {
  const history = getOrCreateHistory("civ-bonus");
  const allCivs = Object.values(CIVILIZATIONS) as unknown as civConfig[];
  if (history.size >= allCivs.length * 4) history.clear();
  const civs = Random.order(allCivs).slice(0, 3);
  const civ = Random.pick(civs);
  const bonuses = SDK.civilizations.Get(civ.abbr).info.overview.find((o) => o.title === "Civilization Bonuses")?.list ?? [];
  const bonus = Random.pick(bonuses);
  if (!bonuses.length || history.has(bonus) || (bonus.includes("Berry") && ["de", "ab"].every((abbr) => civs.some((cv) => cv.abbr == abbr))))
    return getCivBonusQuestion(i);
  history.add(bonus);
  return {
    question: `Which civilization has the following bonus?`,
    note: `"${bonus}"`,
    answers: civs.map((c) => ({ type: "civ", id: c.slug })),
    correctAnswer: civs.indexOf(civ),
  };
}
const itemProduceVerb = {
  building: "build",
  unit: "produce",
  technology: "research",
};

/**
 * MEDIUM
 * "From which age can you research wheelbarrow?"
 */
async function getAgeRequirementQuestion(i?: number, civ?: civConfig): Promise<Question> {
  const item = getMostAppropriateVariation(
    await getRandomItem(
      "research-age",
      [ITEMS.TECHNOLOGIES, ITEMS.BUILDINGS, ITEMS.UNITS],
      civ,
      [
        "royal-bloodlines",
        "enlistment-incentives",
        "crossbow-stirrups",
        "house",
        "fortified-palisade-wall",
        "trade-wing",
        "economic-wing",
        "military-wing",
        "trade-wing",
        "culture-wing",
        "capital-town-center",
        "farm",
      ],
      ["landmark", "wonder", "worker"]
    ),
    civ
  );
  return {
    question: `From which age on can ${item.unique ? "the " + CIVILIZATIONS[item.civs[0]].name : "most civs"} ${itemProduceVerb[item.type]} ${
      item.type == "technology" ? item.name : plural(item.name)
    }?`,
    answers: [PRETTY_AGE_MAP_LONG[1], PRETTY_AGE_MAP_LONG[2], PRETTY_AGE_MAP_LONG[3], PRETTY_AGE_MAP_LONG[4]],
    correctAnswer: item.age - 1,
    note: `"${item.description}"`,
  };
}

/**
 * MEDIUM
 * "Which civilization can research Honed Blades?"
 */
async function getCivHasAccessQuestion(i?: number, civ?: civConfig): Promise<Question> {
  const item = await getRandomItem("civHasAccess", [ITEMS.BUILDINGS, ITEMS.UNITS, ITEMS.TECHNOLOGIES], civ, [], ["landmark", "wonder"]);
  if (item.civs.length >= 7) return getCivHasAccessQuestion(i, civ);

  if (item.civs.length >= 4) {
    const correctCiv = Random.pick(Object.values(CIVILIZATIONS).filter((c) => !item.civs.includes(c.abbr))) as unknown as civConfig;
    const incorrectCiv = Random.order(item.civs)
      .slice(0, 2)
      .map((c) => CIVILIZATIONS[c]);
    const options = Random.order([correctCiv, ...incorrectCiv]);

    return {
      question: `Which civilization is unable to ${itemProduceVerb[item.type]} ${item.name}?`,
      note: "",
      correctAnswer: options.indexOf(correctCiv),
      answers: options.map((c) => ({ type: "civ", id: c.slug })),
    };
  } else {
    const correctCiv = CIVILIZATIONS[Random.pick(item.civs)];
    const incorrectCiv = Random.order(Object.values(CIVILIZATIONS).filter((c) => !item.civs.includes(c.abbr))).slice(0, 2) as unknown as civConfig[];
    const options = Random.order([correctCiv, ...incorrectCiv]);
    return {
      question: `Which civilization can ${itemProduceVerb[item.type]} ${item.name}?`,
      note: "",
      correctAnswer: options.indexOf(correctCiv),
      answers: options.map((c) => ({ type: "civ", id: c.slug })),
    };
  }
}

/**
 * HARD
 * "What is the cost of Boachoan?"
 */
async function getCostQuestion(difficulty?: number, civ?: civConfig): Promise<Question> {
  const excludeIds = ["trade-wing", "economic-wing", "military-wing", "trade-wing", "culture-wing", "capital-town-center"];
  const excludeClasses: ItemClass[] = ["landmark", "wonder"];
  const types =
    difficulty < 10
      ? [ITEMS.BUILDINGS]
      : difficulty < 15
      ? [ITEMS.UNITS, ITEMS.BUILDINGS]
      : difficulty < 20
      ? [ITEMS.UNITS]
      : [ITEMS.UNITS, ITEMS.TECHNOLOGIES];
  const item = await getRandomItem("cost-question", types, civ, excludeIds, excludeClasses);
  const variation = getMostAppropriateVariation(item, civ);
  const { popcap, time, total, ...costs } = variation.costs;
  if (Object.values(costs).every((x) => x == 0)) {
    // Switch to time costs for delhi research
    if (item.civs.length == 1 && item.civs.includes("de")) return getTimeQuestion(difficulty, civ, item);
    return getCostQuestion(difficulty, civ);
  }

  const correctAnswer = costs;
  let question = variation.type == "technology" ? `What does it cost to research ${variation.name}` : `What is the cost of a ${variation.name}?`,
    note = `Standard cost, without any civ or landmark discounts. "${variation.description}"`,
    answers = [costs as ResourceCosts];

  // Add incorrect answers until there are 3, and ensure there are no duplicates
  let attempts = 0;
  while (answers.length < 3) {
    const incorrectAnswer = getIncorrectCosts(costs);
    if (
      Object.values(incorrectAnswer).some((i) => i > 0) &&
      !Object.values(incorrectAnswer).some((i) => isNaN(i)) &&
      answers.every((a) => Object.keys(incorrectAnswer).some((k) => !!incorrectAnswer[k] && !!k && a[k] !== incorrectAnswer[k]))
    ) {
      answers.push(incorrectAnswer);
    } else if (attempts > 10) {
      console.warn(`Could not generate suitable answer for '${question}'`, item);
      return getCostQuestion(difficulty, civ);
    }
    attempts++;
  }

  answers = Random.order(answers);

  return {
    question,
    note,
    answers: answers.map((costs) => ({ type: "costs", costs })),
    correctAnswer: answers.indexOf(correctAnswer),
  };
}

/**
 * HARD
 * "How much time does it take to research Wheelbarrow?"
 */
async function getTimeQuestion(difficulty?: number, civ?: civConfig, item?: UnifiedItem): Promise<Question> {
  const excludeIds = ["trade-wing", "economic-wing", "military-wing", "trade-wing", "culture-wing", "capital-town-center"];
  const excludeClasses: ItemClass[] = ["landmark", "wonder"];
  const types =
    difficulty < 10
      ? [ITEMS.BUILDINGS]
      : difficulty < 15
      ? [ITEMS.UNITS, ITEMS.BUILDINGS]
      : difficulty < 20
      ? [ITEMS.UNITS]
      : [ITEMS.UNITS, ITEMS.TECHNOLOGIES];
  item ??= await getRandomItem("cost-question", types, civ, excludeIds, excludeClasses);
  const variation = getMostAppropriateVariation(item, civ);
  const time = variation.costs.time;

  const correctAnswer = time;
  let question = `How long does it take to ${itemProduceVerb[variation.type]} ${variation.name}`,
    note = `Standard duration, without any civ or landmark discounts. "${variation.description}"`,
    answers = [time];

  answers.push(
    ...Random.order(
      (difficulty < 30 ? [time + 30, time - 30, time * 2, time + 50] : [time - 50, time + 40, time - 20, time + 20, time + 50, time + 5, time - 5]).filter(
        (t) => t > 20
      )
    ).slice(0, 2)
  );

  answers = Random.order(answers);

  return {
    question,
    note,
    answers: answers.map(formatSecondsToTime),
    correctAnswer: answers.indexOf(correctAnswer),
  };
}

/**
 * HARD
 * "Which unit wins in a straight up fight?"
 */

async function getStraightUpFightQuestion(difficulty?: number, civ?: civConfig): Promise<Question> {
  const units: Unit[] = [];
  const excludeClasses: ItemClass[] = [
    "worker",
    "religious",
    "ship",
    ...(Random.chance(0.1) ? (["cavalry", "infantry"] as ItemClass[]) : (["warship", "siege"] as ItemClass[])),
  ];
  let attempts = 0;
  while (units.length < 2) {
    attempts++;
    if (attempts > 20) {
      console.warn("Could not generate suitable matchup");
      return getStraightUpFightQuestion(difficulty, civ);
    }
    const unit =
      difficulty > 30
        ? Random.pick([...(await getRandomItem("straight-up-fight", [ITEMS.UNITS], civ, ["battering-ram", "ribauldequin"], excludeClasses)).variations])
        : getMostAppropriateVariation<Unit>(
            await getRandomItem("straight-up-fight", [ITEMS.UNITS], civ, ["battering-ram", "ribauldequin"], excludeClasses),
            civ
          );
    if (unit.weapons.filter((w) => w.type != "fire")?.length !== 1) continue;
    units.push(unit);
  }

  const options = Random.order(units);

  const winner = battleUnits(options[0], options[1]);

  return {
    question: `Which unit wins in a fight?`,
    note: `Without any upgrades, in range, no kiting, charges or special attacks and influences. Last one standing wins.`,
    answers: [...options.map((u) => `${u.name} in ${PRETTY_AGE_MAP_LONG[u.age]}`), "It's a draw"],
    correctAnswer: winner === false ? 2 : options.indexOf(winner),
    versus: [
      { id: options[0].id, baseId: options[0].baseId, civ: options[0].civs[0], age: options[0].age },
      { id: options[1].id, baseId: options[1].baseId, civ: options[1].civs[0], age: options[1].age },
    ],
  };
}

/**
 * EXPERT
 * "How many archers does it take to one-shot a horseman?"
 */
async function getOneShotQuestion(i?: number, civ?: civConfig): Promise<Question> {
  const rangedUnit = await getRandomItem(
    "oneshot",
    [ITEMS.UNITS],
    civ,
    ["khan", "battering-ram", "ribauldequin"],
    ["worker", "melee", "religious", "ship", "warship"]
  );

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
    versus: [
      { id: ranged.id, baseId: ranged.baseId, civ: ranged.civs[0], age: ranged.age },
      { id: target.id, baseId: target.baseId, civ: target.civs[0], age: target.age },
    ],
  };
}

export function formatAnswer(answer: Answer): JSX.Element {
  if (typeof answer === "string") {
    return <>{answer}</>;
  }
  switch (answer.type) {
    case "civ":
      const civ = CIVILIZATION_BY_SLUG[answer.id];
      if (!civ) return <>{answer.id}</>;
      return formatCiv(civ);
    case "resource":
      return (
        <>
          <img src={RESOURCES[answer.id]} class="h-6 object-contain w-7" /> {answer.label ?? (answer.id[0].toUpperCase() + answer.id.slice(1))}
        </>
      );
    case "unit":
    case "building":
    case "technology":
      const item = SDK[answer.type === "unit" ? "units" : answer.type === "building" ? "buildings" : "technologies"].get(answer.id);
      if (!item) return <>{answer.id}</>;
      return (
        <>
          <ItemIcon item={item} size={8} class="self-center" />
          {item.name}
        </>
      );
    case "text":
      return <>{answer.label ?? answer.id}</>;
    case "costs":
      return <>{formatCosts(answer.costs)}</>;
    default:
      return <>{answer.id}</>;
  }
}

/**
 * Helper functions
 */

const formatCosts = (costs: ResourceCosts) => (
  <div class="flex items-center">
    {Object.entries(costs).map(([key, value]) =>
      value ? (
        <span class="flex items-center gap-1 mr-2">
          <img src={/*@once*/ RESOURCES[key]} class="h-6 object-contain w-7" /> {/*@once*/ value}
        </span>
      ) : undefined
    )}
  </div>
);

// Todo: This should return two answers generated with the same logic to make it less easy to deduce the correct answer
const getIncorrectCosts = (correct: ResourceCosts) => {
  const costs = Object.fromEntries(Object.entries(correct).filter(([k, v]) => v > 0)) as ResourceCosts;
  const { gold, food, wood, stone } = costs;

  const resourcesWithValues = ["gold", "food", "wood", "stone"].filter((r) => costs[r] > 0);

  const fuckitUps =
    resourcesWithValues.length > 1
      ? [
          () =>
            // Double all cost
            resourcesWithValues.forEach((r) => (costs[r] = costs[r] * 2)),
          () => {
            // Change one of the values randmonly
            const key = Random.pick(resourcesWithValues);
            costs[key] = Math.floor((costs[key] || 0) * Random.pick(0.05, 0.08)) * 10;
          },
          () => (costs[Random.key(costs)] = 0),
          () => {
            // Flip resources
            if (wood && food) {
              costs.wood = food;
              costs.food = wood;
            }
            if (food && gold) {
              costs.food = gold;
              costs.gold = food;
            }
          },
          () => {
            // Set all costs to same high value
            const max = Math.max(...Object.values(costs));
            resourcesWithValues.forEach((r) => (costs[r] = max));
          },
          () => {
            // Set all costs to same low value
            const min = Math.min(...Object.values(costs));
            resourcesWithValues.forEach((r) => (costs[r] = min));
          },
        ]
      : [
          () => {
            const value = Math.max(...Object.values(costs));
            const resource = resourcesWithValues[0];
            [
              [100, 150, 200],
              [15, 25, 35],
              [10, 20, 30],
              [5, 10, 15],
            ].forEach((arr) => {
              if (arr.includes(value)) costs[resource] = Random.pick(arr);
            });
          },
          () => {
            // Realistic cost adding if just one resource
            if (wood) costs.wood = (wood || 30) + Random.pick(25, 50, -25);
            else if (stone) costs.stone = (stone || 50) * Random.pick(2, 1.5, 0.5);
            else if (food) costs.food = (food || 30) + Random.pick(25, 50, -25);
            else if (gold) costs.gold = (gold || 0) + Random.pick(30, 50, -30);
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
      <CivFlag abbr={/*@once*/ civ.abbr} class="w-8 mr-2" />
      {/*@once*/ civ.name}
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
  civ?: civConfig,
  excludeIds: string[] = [],
  excludeClasses: ItemClass[] = []
): Promise<UnifiedItem<ItemTypes[T]>> {
  const history = getOrCreateHistory(historyKey);
  const items = SDK[Random.pick(types)].where({ civilization: civ?.abbr });
  const item = Random.pick(
    items.filter(
      (i) => !excludeIds.includes(i.id) && !history.has(i.id) && !i.classes.some((c) => excludeClasses.includes(c) && (!civ || i.unique || i.civs.length <= 2))
    )
  ) as UnifiedItem<ItemTypes[T]>;
  if (!item) {
    history.clear();
    return getRandomItem(historyKey, types, civ, excludeIds, excludeClasses);
  }
  history.add(item.id);
  return item;
}

// Saving 2kB here 💪 🤓 https://bundlephobia.com/package/pluralize@8.0.0
const ignorePlural = ["nest of bees", "man-at-arms", "barracks"];
function plural(word: string) {
  if (ignorePlural.includes(word.toLowerCase())) return word;
  if (word.endsWith("man") && word.toLowerCase() != "shaman") return word.replace("man", "men");
  return (word.replace(/(?:s|x|z|ch|sh)$/i, "$&e").replace(/([^aeiou])y$/i, "$1ie") + "s").replace(/i?e?s$/i, (match) => {
    const isTailLowerCase = word.slice(-1) === word.slice(-1).toLowerCase();
    return isTailLowerCase ? match.toLowerCase() : match.toUpperCase();
  });
}
