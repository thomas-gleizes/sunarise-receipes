import { ores, alloy } from "./items";

const recipes = {
  [alloy.BRONZE]: {
    [ores.IRON]: 2,
    [ores.COPPER]: 4,
    xp: 7,
  },
  [alloy.STEEL]: {
    [alloy.BRONZE]: 4,
    [ores.IRON]: 16,
    [ores.GOLD]: 8,
    [ores.OBSIDIAN]: 4,
    xp: 16,
  },
  [alloy.INVAR]: {
    [alloy.BRONZE]: 4,
    [alloy.STEEL]: 2,
    [ores.DIAMOND]: 4,
    [ores.EMERALD]: 12,
    [ores.GOLD]: 16,
    xp: 27,
  },
  [alloy.TITANE]: {
    [alloy.STEEL]: 4,
    [alloy.INVAR]: 4,
    [ores.NETHER_SCRAP]: 2,
    [ores.DIAMOND]: 8,
    [ores.EMERALD]: 16,
    xp: 52,
  },
  [alloy.VIRENIUM]: {
    [alloy.TITANE]: 8,
    [ores.NETHER_STAR]: 3,
    [ores.NETHERITE]: 2,
    [ores.DIAMOND]: 16,
    xp: 100,
  },
};

export default recipes;
