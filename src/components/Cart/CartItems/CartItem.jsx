import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Redux/User/actions';

const CartItem = ({cartItem}) => {
  const {id, name, category, imageUrl, price, quantity} = cartItem;
  const dispatch =useDispatch()

    const removeHandler = (id) =>{
      dispatch(removeFromCart(id))
      
    }

    return (
          <div className="cartCard">
              <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img
                  className="lws-cartImage"
                  src={imageUrl}
                  alt="product"
                />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                  <h4 className="lws-cartName">
                    {name}
                  </h4>
                  <p className="lws-cartCategory">{category}</p>
                  <p>BDT <span className="lws-cartPrice">{price}</span></p>
                </div>
              </div>
              <div
                className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0"
              >
                <div className="flex items-center space-x-4">
                  <button className="lws-incrementQuantity">
                    <i className="text-lg fa-solid fa-plus"></i>
                  </button>
                  <span className="lws-cartQuantity">{quantity}</span>
                  <button className="lws-decrementQuantity">
                    <i className="text-lg fa-solid fa-minus"></i>
                  </button>
                </div>
                <p className="text-lg font-bold">
                  BDT <span className="lws-calculatedPrice">00</span>
                </p>
              </div>
              <div
                className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0"
              >
                <button className="lws-removeFromCart" onClick={()=>removeHandler(id)}> 
                  <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
              </div>
            </div>  
    
        
    );
};

export default CartItem;