import React from 'react';
import {useSelector} from 'react-redux';
import Product from './Product';

const Products = () => {
  const states =useSelector((state) =>state.productData)
  // const {}= states;
  console.log(states)
    return (
        <div className="productContainer" id="lws-productContainer">
        {
         states.map((product) => <Product key={product.id} product={product}/>)
        }
        {/* <Product/> */}
              
      </div>
    );
};

export default Products;