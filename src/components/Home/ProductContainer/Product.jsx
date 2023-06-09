import React from 'react';
import { useDispatch } from 'react-redux';
import { cardQuantityDecreser } from '../../../Redux/Admin/actions';
import { addToCart } from '../../../Redux/User/actions';

const Product = ({product}) => {
   
    const dispatch= useDispatch()
    const {id, name, category, imageUrl, price, quantity} = product;

    const handleAddToCart=()=>{
        dispatch(addToCart(product))
        dispatch(cardQuantityDecreser(id, quantity))
    }
    
    return (
        <div className="lws-productCard">
                <img className="lws-productImage" src={imageUrl} alt="product" />
                <div className="p-4 space-y-2">
                    <h4 className="lws-productName">{name}</h4>
                    <p className="lws-productCategory">{category}</p>
                    <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
                    </div>
                    <button disabled={quantity === 0} className="lws-btnAddToCart" onClick={handleAddToCart}>Add To Cart</button>
                </div>
        </div>         
    );
};

export default Product;