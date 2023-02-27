import React from 'react';
import { useSelector } from 'react-redux';

const BillDetails = () => {
   const state =useSelector((state)=>state.userData.cart)
   const totalAmount =state.reduce((total, cart )=> total + (parseInt(cart.price) * cart.quantity), 0) 
   const totalQuantity =state.reduce((total, cart )=> total + cart.quantity, 0) 
 

  //  const totalAmount =state.map(cart => parseInt(cart.price) * cart.quantity) 
  //  console.log(totalAmount)
    return (
        <div>
            <div className="billDetailsCard">
              <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p>BDT <span className="lws-subtotal">{totalAmount}</span></p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Discount</p>
                  <p>BDT <span className="lws-discount">0</span></p>
                </div>
                <div className="flex items-center justify-between">
                  <p>VAT</p>
                  <p>BDT <span className="vat">0</span></p>
                </div>
                <div className="flex items-center justify-between pb-4">
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">
                    BDT <span className="lws-total">{totalAmount}</span>
                  </p>
                </div>
                <button className="placeOrderbtn">place order</button>
              </div>
            </div>
          </div>
    );
};

export default BillDetails;