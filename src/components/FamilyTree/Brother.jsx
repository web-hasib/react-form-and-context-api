import React, {  use, useContext } from 'react';
import { AssetContext, MoneyContext } from './FamilyTree';

const Brother = () => {
    const newAsset = useContext(AssetContext);

    //* we can use use() hook to get the value of context

    const [money, setMoney]= use(MoneyContext)
    
    return (
        <div>
            <h3>Brother</h3>
            <p>New asset : {newAsset}</p>
            <button onClick={()=> setMoney(money+ 1000)}>Add 1000 taka </button>

        </div>
    );
};

export default Brother;