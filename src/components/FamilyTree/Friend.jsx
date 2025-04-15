import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
    const [money , setMoney]= use(MoneyContext)
    return (
        <div>
          <h3>Friend</h3>
            <p>Money : {money}</p>
            <button onClick={()=> setMoney(money+ 500)}>Add 500 taka </button>
        </div>
    );
};

export default Friend;