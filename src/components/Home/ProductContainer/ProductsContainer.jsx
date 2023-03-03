import React from 'react';
import AddProductForm from './AddProductForm';
import Product from './Product';
import Products from './Products';
import { useSelector } from 'react-redux';

const ProductContainer = () => {
    const productData= useSelector((state)=> state.productData)
    // console.log(productData);
    return (
      <main className="py-16">
            <div className="productWrapper">
                {
                    productData.length === 0 ?  "No product Exists, but you can add": <Products></Products>
                }
                <AddProductForm></AddProductForm>
            </div>
        </main>  
    );
};

export default ProductContainer;