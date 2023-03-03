import React, { useState } from 'react';
import logo from '../../Assets/images/logo.png'
import { useSelector } from 'react-redux';

const Navbar = ({handleShowCart}) => {
    console.log(handleShowCart);
    const state = useSelector((state) => state.userData.cart)
    const totalQuantity = state.reduce((total, cart) => total + cart.quantity, 0)
    
    return (
        <>
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="index.html">
                    <img src={logo} alt="LWS" className="max-w-[140px]" />
                </a>

                <div className="flex gap-4">
                    <a href="#home" className="navHome" id="lws-home"> Home </a>
                    <a className="navCart" id="lws-cart" onClick={handleShowCart}>
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">{totalQuantity}</span>
                    </a>
                </div>
            </div>
        </nav>           
         </>


    );
};

export default Navbar;







// import React from 'react';
// import logo from '../../Assets/images/logo.png'
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//     const state =useSelector((state)=>state.userData.cart)
//     const totalQuantity =state.reduce((total, cart )=> total + cart.quantity, 0) 

//     const handleShowCart = () =>{
    
//     }
//     return (
//         <nav className="bg-[#171C2A] py-4">
//             <div className="navBar">
//             <a href="index.html">
//                 <img src={logo} alt="LWS" className="max-w-[140px]" />
//             </a>

//             <div className="flex gap-4" >
//                 <a href="#home" className="navHome" id="lws-home"> Home </a>
//                 <a href="cart.html" className="navCart" id="lws-cart" onClick={handleShowCart}>
//                 <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
//                 <span id="lws-totalCart">{totalQuantity}</span>
//                 </a>
//             </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;