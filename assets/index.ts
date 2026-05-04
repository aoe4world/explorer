import food from "./resources/food.png";
import gold from "./resources/gold.png";
import stone from "./resources/stone.png";
import wood from "./resources/wood.png";
import time from "./resources/time.png";
import popcap from "./resources/popcap.png";
import oliveoil from "./resources/oliveoil.png";
import silver from "./resources/silver.png";
import vizier from "./resources/vizierpoints.png";

import twitch_moderator from "./twitch-moderator.png";
import twitch_subscriber from "./twitch-subscriber.png";

import dlc_flag_1 from "./dlc-flag-sultans-ascend.png";
import dlc_flag_2 from "./dlc-flag-knights-of-cross-and-rose.png";
import dlc_flag_3 from "./dlc-flag-dynasties-of-the-east.png";
import dlc_flag_4 from "./dlc-flag-yue-feis-legacy.png";

export const FLAGS: Record<string, string> = Object.fromEntries(
  Object.entries(import.meta.glob("./flags/*.png", { eager: true, query: "?url", import: "default" })).map(([k, v]) => [k.match(/\.\/flags\/(.*)\.png/)![1], v as string])
);

export const RESOURCES = { food, gold, stone, wood, time, popcap, oliveoil, silver, vizier };

export const TWITCH = { moderator: twitch_moderator, subscriber: twitch_subscriber };

export const DLC_FLAGS = {
    "sultans-ascend": dlc_flag_1,
    "knights-of-cross-and-rose": dlc_flag_2,
    "dynasties-of-the-east": dlc_flag_3,
    "yue-feis-legacy": dlc_flag_4,
}

export const BACKDROPS = Object.fromEntries(
    Object.entries(import.meta.glob("./backdrops/*.{png,webp,jpg}", { eager: true, query: "?url", import: "default"  })).map(([k, v]) => [
        k.match(/\.\/backdrops\/(.*)\.(png|webp|jpg)/)![1],
        v,
    ])
);
