import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='mithun' />
                <Cousin name='mitu' />
                {/* <Cousin name='Cousin 3' /> */}
            </section>
        </div>
    );
};

export default Uncle;