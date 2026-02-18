import { DLC_FLAGS } from "../../assets";

export interface DLC {
  id: string;
  name: string;
  flag: string;
  links: {
    steam?: string;
    xbox?: string;
    msstore?: string;
    playstation?: string;
  };
}

export const DLCS: DLC[] = [
  {
    id: "sultans-ascend",
    name: "Sultans Ascend",
    flag: DLC_FLAGS["sultans-ascend"],
    links: {
      steam: "https://store.steampowered.com/app/1959430?utm_source=aoe4world",
      xbox: "https://www.xbox.com/en-us/games/store/age-of-empires-iv-the-sultans-ascend/9mvghsscmnsg",
      msstore: "https://www.microsoft.com/store/productid/9NQMNQDS4QQL",
      playstation: "https://store.playstation.com/en-us/product/UP6312-PPSA25366_00-0249205694515304",
    },
  },
  {
    id: "knights-of-cross-and-rose",
    name: "Knights of Cross and Rose",
    flag: DLC_FLAGS["knights-of-cross-and-rose"],
    links: {
      steam: "https://store.steampowered.com/app/3144890?utm_source=aoe4world",
      xbox: "https://www.xbox.com/en-us/games/store/age-of-empires-iv-knights-of-cross-and-rose/9p2gds0547jz",
      msstore: "https://www.microsoft.com/store/productid/9p20k049mht5",
      playstation: "https://store.playstation.com/en-us/product/UP6312-PPSA25366_00-0724965821192993",
    },
  },
  {
    id: "dynasties-of-the-east",
    name: "Dynasties of the East",
    flag: DLC_FLAGS["dynasties-of-the-east"],
    links: {
      steam: "https://store.steampowered.com/app/3067190?utm_source=aoe4world",
      xbox: "https://www.xbox.com/en-us/games/store/age-of-empires-iv-dynasties-of-the-east/9n12vdwgdh6r",
      msstore: "https://www.microsoft.com/store/productid/9n759w6rb0j7",
      playstation: "https://store.playstation.com/en-us/product/UP6312-PPSA25366_00-0619978215161106",
    },
  },
];
