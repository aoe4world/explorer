import food from "./resources/food.png";
import gold from "./resources/gold.png";
import stone from "./resources/stone.png";
import wood from "./resources/wood.png";
import time from "./resources/time.png";
import popcap from "./resources/popcap.png";
import oliveoil from "./resources/oliveoil.png";
import vizier from "./resources/vizierpoints.png";

import twitch_moderator from './twitch-moderator.png';
import twitch_subscriber from './twitch-subscriber.png';


export const FLAGS = Object.fromEntries(Object.entries(import.meta.glob('./flags/*.png', { eager: true, as: 'url' })).map(([k, v]) => [k.match(/\.\/flags\/(.*)\.png/)![1], v]));

export const RESOURCES = { food, gold, stone, wood, time, popcap, oliveoil, vizier };

export const TWITCH = { moderator: twitch_moderator, subscriber: twitch_subscriber };

