import React, { useState } from 'react';
import ProducForm from './ProducForm';
import ProductTable from './ProductTable';

const ProductManagment = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    }
    return (
        <div>
            <ProducForm handleAddProduct={handleAddProduct}/>
            <ProductTable products={products}/>
        </div>
    );
};

export default ProductManagment;