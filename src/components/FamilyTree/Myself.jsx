import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <section>
                <Special asset={asset}/>
            </section>
        </div>
    );
};

export default Myself;