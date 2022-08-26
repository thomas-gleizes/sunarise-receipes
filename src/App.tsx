import * as Ores from "./components/items/ores";
import * as Alloy from "./components/items/alloy";

const App = () => {
  return (
    <div>
      <div className="p-10 flex space-x-4">
        <Ores.Copper />
        <Ores.Iron />
        <Ores.Gold />
        <Ores.Emerald />
        <Ores.Diamond />
        <Ores.Obsidian />
        <Ores.NetherScrap />
        <Ores.Netherite />
        <Ores.NetherStar />
      </div>
      <div className="p-10 flex space-x-4">
        <Alloy.Bronze />
        <Alloy.Invar />
        <Alloy.Steel />
        <Alloy.Titan />
        <Alloy.Verinium />
      </div>
    </div>
  );
};

export default App;
