import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name=== 'Annika' && <Special asset={asset}/>
            }
            {
                name === "mithun" && <Friend />
            }
        </div>
    );
};

export default Cousin;