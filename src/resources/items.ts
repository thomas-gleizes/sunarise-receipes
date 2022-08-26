import * as Ores from "./../components/items/ores";
import * as Alloy from "./../components/items/alloy";

const DIAMOND = "diamond";
const IRON = "iron";
const GOLD = "gold";
const EMERALD = "emerald";
const COPPER = "copper";
const OBSIDIAN = "obsidian";
const NETHER_SCRAP = "nether_scrap";
const NETHERITE = "netherite";
const NETHER_STAR = "nether_star";

const BRONZE = "bronze";
const STEEL = "steel";
const INVAR = "invar";
const TITANE = "titane";
const VIRENIUM = "virenmium";

export const ores = {
  DIAMOND,
  IRON,
  GOLD,
  EMERALD,
  COPPER,
  OBSIDIAN,
  NETHER_SCRAP,
  NETHERITE,
  NETHER_STAR,
};

export const alloy = {
  BRONZE,
  STEEL,
  INVAR,
  TITANE,
  VIRENIUM,
};

export const type = {
  ORE: "ore",
  ALLOY: "alloy",
};

const items = {
  [DIAMOND]: { name: DIAMOND, element: Ores.Diamond, type: type.ORE },
  [IRON]: { name: IRON, element: Ores.Iron, type: type.ORE },
  [GOLD]: { name: GOLD, element: Ores.Gold, type: type.ORE },
  [EMERALD]: { name: EMERALD, element: Ores.Emerald, type: type.ORE },
  [COPPER]: { name: COPPER, element: Ores.Copper, type: type.ORE },
  [OBSIDIAN]: { name: OBSIDIAN, element: Ores.Obsidian, type: type.ORE },
  [NETHER_SCRAP]: { name: NETHER_SCRAP, element: Ores.NetherScrap, type: type.ORE },
  [NETHERITE]: { name: NETHERITE, element: Ores.Netherite, type: type.ORE },
  [NETHER_STAR]: { name: NETHER_STAR, element: Ores.NetherStar, type: type.ORE },
  [BRONZE]: { name: BRONZE, element: Alloy.Bronze, type: type.ALLOY },
  [STEEL]: { name: STEEL, element: Alloy.Steel, type: type.ALLOY },
  [INVAR]: { name: INVAR, element: Alloy.Invar, type: type.ALLOY },
  [TITANE]: { name: TITANE, element: Alloy.Titan, type: type.ALLOY },
  [VIRENIUM]: { name: VIRENIUM, element: Alloy.Verinium, type: type.ALLOY },
};

export default items;
