import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css"; // Assuming you have some CSS for styling
export const AssetContext = createContext("");
export const MoneyContext = createContext(0);
const FamilyTree = () => {
    const [money , setMoney] = useState(0);
  const asset = "diamond";
  const newAsset = "gold";

  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h3>total family money : {money}</h3>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset} />
        </AssetContext.Provider>
      </MoneyContext>
      {/* <Grandpa asset={asset}/> */}
    </div>
  );
};

export default FamilyTree;
