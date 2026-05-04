import { UnifiedItem, Unit, ITEMS, Weapon } from "../types/data";
import { calculateStatParts, getUnitStats } from "./stats";
import { StatProperty, Stat } from "../types/stats";

function getAttackStatProperty(weaponType: Weapon["type"]): StatProperty {
  if (weaponType === "melee") return "meleeAttack";
  else if (weaponType === "ranged") return "rangedAttack";
  else if (weaponType === "siege") return "siegeAttack";
  else if (weaponType === "fire") return "fireAttack";
  else throw new Error(`Unknown weapon type ${weaponType}`);
}

function getArmorStatProperty(weaponType: Weapon["type"]): StatProperty | null {
  if (weaponType === "melee") return "meleeArmor";
  else if (weaponType === "ranged") return "rangedArmor";
  else if (weaponType === "siege") return null;
  else if (weaponType === "fire") return "fireArmor";
  else throw new Error(`Unknown weapon type ${weaponType}`);
}

function getResistanceStatProperty(weaponType: Weapon["type"]): StatProperty | null {
  if (weaponType === "melee") return "meleeResistance";
  else if (weaponType === "ranged") return "rangedResistance";
  else if (weaponType === "siege") return null;
  else if (weaponType === "fire") return null;
  else throw new Error(`Unknown weapon type ${weaponType}`);
}

export type BattleStats =  {
  timeRequired: number;
  attacksRequired: number;
  targetArmorType: string | undefined;
  targetArmor: number | undefined;
  targetResistance: number | undefined;
  damageType: string | undefined;
  damage: number;
  projectileCount: number;
  projectileDamage: number;
  projectileNetDamage: number;
  attackSpeed: number | undefined;
  isExplosive: boolean;
  finalWeaponAttack: number | undefined;
  targetHitpoints: number;
  hitpointRemaining: number | undefined;
};

export async function getBattleStats(
  unit1: Unit,
  unit2: Unit,
  unit1Age: number,
  unit2Age: number,
  unifiedUnit1: UnifiedItem<Unit>,
  unifiedUnit2: UnifiedItem<Unit>,
  unit1Technologies: string[],
  unit2Technologies: string[]
) {
  const unit1StatsMap = unit1 && (await getUnitStats(ITEMS.UNITS, unifiedUnit1, unit1.civs[0], { variation: unit1, selectedTechnologies: unit1Technologies }));
  const unit2StatsMap = unit2 && (await getUnitStats(ITEMS.UNITS, unifiedUnit2, unit2.civs[0], { variation: unit2, selectedTechnologies: unit2Technologies }));

  const calculateBattleSide = (attacker: Unit, target: Unit, attackerStatsMap: Partial<Record<StatProperty, Stat>>, targetStatsMap: Partial<Record<StatProperty, Stat>>, attackerAge: number, targetAge: number, unifiedAttacker: UnifiedItem<Unit>, unifiedTarget: UnifiedItem<Unit>): BattleStats => {

    attackerStatsMap ??= {};
    targetStatsMap ??= {};
    const targetHitpointsStat = targetStatsMap?.hitpoints;
    const calculatedTargetHitpoints = targetHitpointsStat && calculateStatParts(targetHitpointsStat, targetAge, { item: unifiedTarget });
    const hp = calculatedTargetHitpoints?.total ?? Infinity;

    const weapon = attacker?.weapons.filter((w) => w.type != "fire")[0];

    if (!weapon) {
      return {
        timeRequired: Infinity,
        attacksRequired: Infinity,
        targetArmorType: undefined,
        targetArmor: undefined,
        targetResistance: undefined,
        damageType: undefined,
        damage: 0,
        projectileCount: 0,
        projectileDamage: 0,
        projectileNetDamage: 0,
        attackSpeed: undefined,
        isExplosive: false,
        finalWeaponAttack: undefined,
        targetHitpoints: hp,
        hitpointRemaining: undefined,
      };
    }

    const weaponType = weapon?.type || "melee";

    const attackerDamageStatProperty = weaponType && getAttackStatProperty(weaponType);
    const attackerDamageStat = attackerStatsMap[attackerDamageStatProperty];
    const calculatedAttackerDamage = attackerDamageStat && calculateStatParts(attackerDamageStat, attackerAge, { item: unifiedAttacker, target: unifiedTarget });
    const projectileDamage = calculatedAttackerDamage?.max ?? 0;

    const targetArmorStatProperty = weaponType && getArmorStatProperty(weaponType);
    const targetArmorStat = targetArmorStatProperty ? targetStatsMap[targetArmorStatProperty] : undefined;
    const targetArmorCalculatedStat = targetArmorStat && calculateStatParts(targetArmorStat, targetAge, { item: unifiedTarget });
    const targetArmor = targetArmorCalculatedStat ? targetArmorCalculatedStat.total : 0;

    const targetResistanceStatProperty = weaponType && getResistanceStatProperty(weaponType);
    const targetResistanceStat = targetResistanceStatProperty ? targetStatsMap[targetResistanceStatProperty] : undefined;
    const targetResistanceCalculatedStat = targetResistanceStat && calculateStatParts(targetResistanceStat, targetAge, { item: unifiedTarget });
    const targetResistance = targetResistanceCalculatedStat ? targetResistanceCalculatedStat.total : 0;

    const projectileCount = weapon?.burst?.count ?? 1;
    const projectileNetDamage = Math.max(1, (projectileDamage - targetArmor) * (1 - targetResistance / 100));
    const netDamage = projectileNetDamage * projectileCount;
    const attacksRequired = hp !== undefined && netDamage > 0 ? Math.ceil(hp / netDamage) : Infinity;

    const weaponSpeedStat = attackerStatsMap["attackSpeed"];
    const weaponSpeedCalculatedStat = weaponSpeedStat && calculateStatParts(weaponSpeedStat, attackerAge, { item: unifiedAttacker });
    const weaponSpeed = weaponSpeedCalculatedStat?.total ?? 0.125;
    const weaponSpeedFactor = weaponSpeed / (weapon?.speed ?? 0.125);

    const finalWeaponCooldown = weapon ? weaponSpeed - (["aim", "windup", "attack"].reduce((a, kind) => a + (weapon.durations?.[kind] ?? 0), 0) * weaponSpeedFactor) : 0;
    let timeRequired = attacksRequired * weaponSpeed - finalWeaponCooldown;

    const isExplosive = attacker.classes.includes("incendiary_ship");
    if (isExplosive && attacksRequired > 1) {
      timeRequired = Infinity;
    }

    return {
      timeRequired,
      attacksRequired,
      targetArmorType: targetArmorStatProperty?.replace("Armor", ""),
      targetArmor: targetArmor,
      targetResistance: targetResistance,
      damageType: weaponType,
      damage: netDamage,
      projectileCount: projectileCount,
      projectileDamage: projectileDamage,
      projectileNetDamage: projectileNetDamage,
      attackSpeed: weaponSpeed,
      isExplosive,
      finalWeaponAttack: weaponSpeed - finalWeaponCooldown,
      targetHitpoints: hp,
      hitpointRemaining: undefined as number | undefined,
    };
  };

  const stats1 = calculateBattleSide(unit1, unit2, unit1StatsMap, unit2StatsMap, unit1Age, unit2Age, unifiedUnit1, unifiedUnit2);
  const stats2 = calculateBattleSide(unit2, unit1, unit2StatsMap, unit1StatsMap, unit2Age, unit1Age, unifiedUnit2, unifiedUnit1);

  const timeRequired = Math.min(stats1.timeRequired ?? Infinity, stats2.timeRequired ?? Infinity);

  if (timeRequired !== Infinity) {
    const maxAttacks1 = stats1.isExplosive ? 1 : stats1.attacksRequired;
    const maxAttacks2 = stats2.isExplosive ? 1 : stats2.attacksRequired;
    stats1.hitpointRemaining = Math.max(0, stats2.targetHitpoints - stats2.damage * Math.min(maxAttacks2, Math.ceil(timeRequired / (stats2.attackSpeed ?? 1))));
    stats2.hitpointRemaining = Math.max(0, stats1.targetHitpoints - stats1.damage * Math.min(maxAttacks1, Math.ceil(timeRequired / (stats1.attackSpeed ?? 1))));
  }

  if (stats1.isExplosive) {
    if (stats1.attacksRequired === 1) {
      stats2.timeRequired = stats1.timeRequired;
      stats1.hitpointRemaining = 0;
    } else {
      // Technically, if the explosive ship blows itself up, it'll lose and a fishing ship would win.
      // But if it doesn't blow itself up, then it's a draw. The only winning move is not to play.
      // stats2.timeRequired = stats1.finalWeaponAttack;
    }
  }

  if (stats2.isExplosive) {
    if (stats2.attacksRequired === 1) {
      stats1.timeRequired = stats2.timeRequired;
      stats2.hitpointRemaining = 0;
    } else {
      // Technically, if the explosive ship blows itself up, it'll lose and a fishing ship would win.
      // But if it doesn't blow itself up, then it's a draw. The only winning move is not to play.
      // stats1.timeRequired = stats2.finalWeaponAttack;
    }
  }

  const winner = stats1.timeRequired == stats2.timeRequired ? 'draw' :
                  stats1.timeRequired < stats2.timeRequired ? 'unit1' : 'unit2';


  return { stats1, stats2, winner };
}
