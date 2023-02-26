import React from 'react';
import AddProductForm from './AddProductForm';
import Product from './Product';
import Products from './Products';

const ProductContainer = () => {
    return (
      <main className="py-16">
            <div className="productWrapper">
                <Products></Products>
                <AddProductForm></AddProductForm>
            </div>
        </main>  
    );
};

export default ProductContainer;