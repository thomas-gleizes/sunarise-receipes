import { useState } from "react";
import classnames from "classnames";

import items, { type } from "./resources/items";
import * as Ores from "./components/items/ores";
import * as Alloys from "./components/items/alloy";
import ItemSelector from "./components/ItemSelector";
import { capitalize } from "./utils/strings";

const App = () => {
  const [activeAlloy, setActiveAlloy] = useState<any>();
  const [quantity, setQuantity] = useState<number>(16);

  return (
    <div>
      <main className="mx-14 my-10">
        <div className="grid grid-cols-6 bg-slate-100 w-full gap-3 px-5 py-2">
          <div className="col-span-1">
            <div className="mt-5">
              <h2 className="text-xl text-center  font-medium">Chose your Alloy</h2>
            </div>
            <div className="flex flex-col space-y-4 h-full items-center justify-center">
              {Object.entries(items)
                .filter(([, item]) => item.type === type.ALLOY)
                .map(([key, item], index) => (
                  <div
                    key={index}
                    className={classnames(
                      "border-2 w-fit p-3 rounded cursor-pointer hover:bg-slate-200",
                      activeAlloy === key
                        ? "border-blue-500 bg-blue-100"
                        : "border-slate-400"
                    )}
                    onClick={() => setActiveAlloy(key)}
                  >
                    <div>
                      <p className="text-center font-minecraft">
                        {capitalize(item.name)}
                      </p>
                      <item.element />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <div>
              <div>
                <h2>Quantité :</h2>
              </div>
              <div>
                <input
                  className="outline-0 w-16 text-2xl font-medium"
                  type="number"
                  value={quantity}
                  onChange={(event) => setQuantity(+event.currentTarget.value as number)}
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col justify-evenly space-y-10">
            <div className="grid grid-cols-5 gap-x-5 gap-y-3">
              {Object.values(items)
                .filter((item) => item.type === type.ORE)
                .map((item, index) => (
                  <ItemSelector key={index} item={item} />
                ))}
            </div>
            <div className="grid grid-cols-5 gap-x-5 gap-y-3">
              {Object.entries(items)
                .filter(([, item]) => item.type === type.ALLOY)
                .map(([, item], index) => (
                  <ItemSelector key={index} item={item} />
                ))}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="flex justify-between">
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
            <Alloys.Bronze />
            <Alloys.Steel />
            <Alloys.Invar />
            <Alloys.Titan />
            <Alloys.Verinium />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
