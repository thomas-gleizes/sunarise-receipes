import { useState } from "react";
import classnames from "classnames";

import items, { type } from "./resources/items";
import * as Ores from "./components/items/ores";
import * as Alloys from "./components/items/alloy";

const App = () => {
  const [activeAlloy, setActiveAlloy] = useState<any>();
  const [quantity, setQuantity] = useState<number>(16);

  return (
    <div>
      <main className="mx-14 my-10">
        <div className="grid grid-cols-6 bg-slate-100 w-full gap-3 px-5 py-2">
          <div className="col-span-1">
            <div className="mb-3 w-fit">
              <h2 className="text-xl font-medium">Chose your Alloy</h2>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center">
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
                    <item.element />
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-1 flex items-center bg-red-">
            <div>
              <div>
                <h2>Quantité :</h2>
              </div>
              <div>
                <input
                  className="outline-0 w-16 text-2xl font-medium"
                  type="number"
                  value={quantity}
                  onChange={(event) => setQuantity(+event.currentTarget.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col justify-evenly space-y-10">
            <div className="grid grid-cols-5 gap-10">
              {Object.entries(items)
                .filter(([, item]) => item.type === type.ORE)
                .map(([key, item], index) => (
                  <div
                    key={index}
                    className="p-5 border-2 w-fit border-red-400 bg-red-50 rounded flex flex-col items-center space-y-3"
                  >
                    <item.element />
                    <div className="text-center text-slate-900">
                      <p>
                        Need : {32} ({32 / 64})
                      </p>
                      <p>Actual : {0}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="grid grid-cols-5 gap-10">
              {Object.entries(items)
                .filter(([, item]) => item.type === type.ALLOY)
                .map(([key, item], index) => (
                  <div
                    key={index}
                    className="p-5 border-2 w-fit border-red-400 bg-red-50 rounded flex flex-col items-center space-y-3"
                  >
                    <item.element />
                    <div className="text-center text-slate-900">
                      <p>
                        Need : {32} ({32 / 64})
                      </p>
                      <p>Actual : {0}</p>
                    </div>
                  </div>
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
