import React from 'react';
import BillDetails from '../BillDetails';
import CartItem from './CartItem';

const CartItems = () => {
    return (
        <div className="cartListContainer">
           <CartItem></CartItem>
           <BillDetails></BillDetails>     
        </div>
        
    );
};

export default CartItems;