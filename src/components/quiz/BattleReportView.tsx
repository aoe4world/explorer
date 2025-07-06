import { Component, Show } from "solid-js";
import { UnifiedItem, Unit } from "../../types/data";
import { Weapon }  from "../../../data/src/types/items";
import { UnitCard } from "../UnitCard";
import { calculateStatParts, mergeVariationsToStats } from "../../query/stats";
import { StatProperty } from "../../types/stats";
import { CivConfig } from "@data/types/civs";
import { CIVILIZATIONS } from "@data/lib/config/civs";

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

function getBattleStats(attacker: Unit, target: Unit, attackerAge: number, targetAge: number, unifiedAttacker: UnifiedItem<Unit>, unifiedTarget: UnifiedItem<Unit>) {
  const attackerStatsMap = mergeVariationsToStats([attacker]);
  const targetStatsMap = mergeVariationsToStats([target]);

  const weapon = attacker.weapons.filter((w) => w.type != "fire")[0];
  const weaponType = weapon.type;

  // Calculate Attacker Damage
  const attackerDamageStatProperty = getAttackStatProperty(weaponType);
  const attackerDamageStat = attackerStatsMap[attackerDamageStatProperty];

  const calculatedAttackerDamage = calculateStatParts(attackerDamageStat, attackerAge, { item: unifiedAttacker, target: unifiedTarget });
  const damageWithoutTech = calculatedAttackerDamage.total - calculatedAttackerDamage.technologies;
  const bonusDamage = calculatedAttackerDamage.bonus;
  const projectileDamage = damageWithoutTech + bonusDamage;


  // Calculate Target Armor
  const targetArmorStatProperty = getArmorStatProperty(weaponType);
  const targetArmorStat = targetStatsMap[targetArmorStatProperty];

  const targetArmorCalculatedStat = targetArmorStat && calculateStatParts(targetArmorStat, targetAge, { item: unifiedTarget });
  const targetArmor = targetArmorStat ? targetArmorCalculatedStat.total - targetArmorCalculatedStat.technologies : 0;

  // Calculate Target Hitpoints
  const targetHitpointsStat = targetStatsMap.hitpoints;
  const calculatedTargetHitpoints = calculateStatParts(targetHitpointsStat, targetAge, { item: unifiedTarget });
  const hp = calculatedTargetHitpoints.total - calculatedTargetHitpoints.technologies;

  const projectileCount = weapon.burst?.count ?? 1;
  const projectileNetDamage = Math.max(1, projectileDamage - targetArmor);
  const netDamage = projectileNetDamage * projectileCount;
  const attacksRequired = Math.ceil(hp / netDamage);
  const timeRequired = attacksRequired * weapon.speed;

  return {
    timeRequired,
    attacksRequired,
    targetArmorType: targetArmorStatProperty?.replace("Armor", ""),
    targetArmor: targetArmor,
    damageType: weaponType,
    damage: netDamage,
    projectileCount: projectileCount,
    projectileDamage: projectileDamage,
    projectileNetDamage: projectileNetDamage,
    targetHitpoints: hp
  };
}

export const BattleReportView: Component<{ unit1: UnifiedItem<Unit>; unit2: UnifiedItem<Unit>; variation1: Unit; variation2: Unit; }> = (props) => {
  const stats1 = getBattleStats(props.variation1, props.variation2, props.variation1.age, props.variation2.age, props.unit1, props.unit2);
  const stats2 = getBattleStats(props.variation2, props.variation1, props.variation2.age, props.variation1.age, props.unit2, props.unit1);

  const winner = stats1.timeRequired == stats2.timeRequired ? "Draw" : stats1.timeRequired < stats2.timeRequired ? props.variation1.name : props.variation2.name;

  const winnerClass = "text-green-400 font-bold";
  const drawClass = "text-yellow-400 font-bold";

  const Unit = ({unit}) => <span class="text-sm text-gray-300 text-center">{unit}</span>;

  return (
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-3 gap-4">
        <UnitCard unit={props.unit1} variation={props.variation1} civ={CIVILIZATIONS[props.variation1.civs[0]] as any as CivConfig} />

        <div class="grid grid-cols-[auto_1fr_auto] text-md mb-auto">
          <h4 class="col-span-3 font-bold text-white text-xl text-center pb-14">Battle Report</h4>

          {/* Hitpoints */}
          <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold">Hitpoints</div>
          <div class="text-xl">{stats2.targetHitpoints.toFixed(0)} <Unit unit="hp"/></div>
          <div class="col-start-3 text-xl">{stats1.targetHitpoints.toFixed(0)} <Unit unit="hp"/></div>

          {/* Armor */}
          <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold">Armor</div>
          <div class="capitalize text-gray-200">{stats2.targetArmorType}</div>
          <div class="col-start-3 capitalize text-gray-200">{stats1.targetArmorType}</div>
          <div class="text-xl">{stats2.targetArmor.toFixed(0)} <Unit unit="armor"/></div>
          <div class="col-start-3 text-xl">{stats1.targetArmor.toFixed(0)} <Unit unit="armor"/></div>

          {/* Damage per shot */}
          <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold">Applied Damage</div>
          <div class="capitalize text-gray-200">{stats1.damageType}</div>
          <div class="col-start-3 capitalize text-gray-200">{stats2.damageType}</div>
          <div class="text-xl">{stats1.damage.toFixed(1)} <Unit unit="dmg"/></div>
          <div class="col-start-3 text-xl">{stats2.damage.toFixed(1)} <Unit unit="dmg"/></div>

          {/* Shots to kill */}
          <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold mt-4">Shots to kill</div>
          <div class={`text-xl ${stats1.attacksRequired < stats2.attacksRequired ? winnerClass : drawClass}`}>{stats1.attacksRequired} <Unit unit="shots"/></div>
          <div class={`col-start-3 text-xl ${stats2.attacksRequired < stats1.attacksRequired ? winnerClass : drawClass}`}>{stats2.attacksRequired} <Unit unit="shots"/></div>

          {/* Time to kill */}
          <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold">Time to kill</div>
          <div class={`text-xl ${stats1.timeRequired < stats2.timeRequired ? winnerClass : drawClass}`}>{stats1.timeRequired.toFixed(1)} <Unit unit="sec"/></div>
          <div class={`col-start-3 text-xl ${stats2.timeRequired < stats1.timeRequired ? winnerClass : drawClass}`}>{stats2.timeRequired.toFixed(1)} <Unit unit="sec"/></div>
        </div>

        <UnitCard unit={props.unit2} variation={props.variation2} civ={CIVILIZATIONS[props.variation2.civs[0]] as any as CivConfig} />

        <div>
          {/* unit1 techs */}
        </div>
        <div class="col-start-3">
          {/* unit2 techs */}
        </div>
      </div>
    </div>
  );
};
