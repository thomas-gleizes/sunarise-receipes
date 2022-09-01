import React from "react";
import ActionBar from "./ActionBar";
import { capitalize } from "../utils/strings";

const ItemSelector: React.FC<any> = ({ item }) => {
  return (
    <div className="w-[140px] py-3 px-2 border-2 w-fit border-red-400 bg-red-50 rounded flex flex-col items-center space-y-3">
      <div className="flex flex-col space-y-2">
        <item.element />
        <p className="text-center font-medium text-slate-800">{capitalize(item.name)}</p>
      </div>
      <div className="text-center text-slate-900">
        <p className="w-full">
          N : {32} ({32 / 64})
        </p>
        <p>Actual : {0}</p>
      </div>
      <ActionBar quantity={32} />
    </div>
  );
};

export default ItemSelector;
