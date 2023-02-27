import React from 'react';
import { useSelector } from 'react-redux';
import BillDetails from '../BillDetails';
import CartItem from './CartItem';



const CartItems = () => {
    const carts = useSelector((state)=>state.userData.cart)

    return (
        <div className="cartListContainer">
            <div className="space-y-6">
                {
                    carts.map((cartItem)=>  <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
                }  
           </div> 
           <BillDetails></BillDetails>  
        </div>
        
    );
};

export default CartItems;