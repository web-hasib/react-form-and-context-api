import React, { useState } from 'react';

const ProducForm = ({handleAddProduct}) => {

    const [error, setError] = useState('');

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const product = { name, price, quantity };

        if(name.length === 0){
            setError('Name is required');
            return;
        }else if(price.length === 0){
            setError('Price is required');
            return;
        }
        else if(quantity.length === 0){
            setError('Quantity is required');
            return;
        }
        else if (price < 0){
            setError('Price can not be negative');
            return;
        }
        else {
            setError('');
        }
    //   console.log(name, price, quantity);
        // console.log(product);

        // if(!error){
            //! not recomended 

        //     handleAddProduct(product);
        // }
        handleAddProduct(product);
    }

    return (
        <div>
            <h3>Add a product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product name'/>
                <br />
                <input type="text" name='price' placeholder='Product price'/>
                <br />
                <input type="text" name='quantity' placeholder='Product quantity'/>
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color: 'red'}}>{error}</p>
        </div>
    );
};

export default ProducForm;