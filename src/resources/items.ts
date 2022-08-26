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

const Type = {
  ORE: "ore",
  ALLOY: "alloy",
};

const items = {
  [DIAMOND]: { name: DIAMOND, element: Ores.Diamond, type: Type.ORE },
  [IRON]: { name: IRON, element: Ores.Iron, type: Type.ORE },
  [GOLD]: { name: GOLD, element: Ores.Gold, type: Type.ORE },
  [EMERALD]: { name: EMERALD, element: Ores.Emerald, type: Type.ORE },
  [COPPER]: { name: COPPER, element: Ores.Copper, type: Type.ORE },
  [OBSIDIAN]: { name: OBSIDIAN, element: Ores.Obsidian, type: Type.ORE },
  [NETHER_SCRAP]: { name: NETHER_SCRAP, element: Ores.NetherScrap, type: Type.ORE },
  [NETHERITE]: { name: NETHERITE, element: Ores.Netherite, type: Type.ORE },
  [NETHER_STAR]: { name: NETHER_STAR, element: Ores.NetherStar, type: Type.ORE },
  [BRONZE]: { name: BRONZE, element: Alloy.Bronze, type: Type.ALLOY },
  [STEEL]: { name: STEEL, element: Alloy.Steel, type: Type.ALLOY },
  [INVAR]: { name: INVAR, element: Alloy.Invar, type: Type.ALLOY },
  [TITANE]: { name: TITANE, element: Alloy.Titan, type: Type.ALLOY },
  [VIRENIUM]: { name: VIRENIUM, element: Alloy.Verinium, type: Type.ALLOY },
};

export default items;
