import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, removeFromCart } from '../../../Redux/User/actions';
import { incrementQuantity } from './../../../Redux/User/actions';

const CartItem = ({cartItemData}) => {
  const {id, name, category, imageUrl, price, quantity} = cartItemData;
  const dispatch =useDispatch()
    const state=useSelector((state) => state.productData)



    const removeHandler = (id) =>{
      dispatch(removeFromCart(id))
      
    }

    const handleIncrement=(id, quantity)=>{
      dispatch(incrementQuantity(id, quantity))
    }

    const handleDecrement=(id, quantity)=>{
      dispatch(decrementQuantity(id, quantity))
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
                  <button className="lws-incrementQuantity" onClick={()=>handleIncrement(id, quantity)}>
                    <i className="text-lg fa-solid fa-plus"></i>
                  </button>
                   <span className="lws-cartQuantity">{quantity}</span>
                  <button className="lws-decrementQuantity" disabled={quantity === 0} onClick={()=>handleDecrement(id, quantity)}>
                    <i className="text-lg fa-solid fa-minus"></i>
                  </button>
                </div>
                <p className="text-lg font-bold">
                  BDT <span className="lws-calculatedPrice">{quantity * price}</span>
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


// ==========wanted to decrease product card quantity================
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { cardQuantityDecreser } from '../../../Redux/Admin/actions';
// import { decrementQuantity, removeFromCart } from '../../../Redux/User/actions';
// import { incrementQuantity } from './../../../Redux/User/actions';

// const CartItem = ({cartItemData}) => {
  // const state=useSelector((state) => state.productData)


//   const {id, name, category, imageUrl, price, quantity} = cartItemData;
//   const dispatch =useDispatch()

//     const removeHandler = (id) =>{
//       dispatch(removeFromCart(id))
      
//     }

//     const handleIncrement=(id, quantity)=>{
//       dispatch(incrementQuantity(id, quantity))
//       state.map((pd) => {
//         if(pd.id === id){
//           dispatch(cardQuantityDecreser(pd.id, quantity))
//         }
//         return pd;
//       })
//     }

//     const handleDecrement=(id, quantity)=>{
//       dispatch(decrementQuantity(id, quantity))
//     }

//     return (
//           <div className="cartCard">
//               <div className="flex items-center col-span-6 space-x-6">
//                 {/* <!-- cart image --> */}
//                 <img
//                   className="lws-cartImage"
//                   src={imageUrl}
//                   alt="product"
//                 />
//                 {/* <!-- cart item info --> */}
//                 <div className="space-y-2">
//                   <h4 className="lws-cartName">
//                     {name}
//                   </h4>
//                   <p className="lws-cartCategory">{category}</p>
//                   <p>BDT <span className="lws-cartPrice">{price}</span></p>
//                 </div>
//               </div>
//               <div
//                 className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0"
//               >
//                 <div className="flex items-center space-x-4">
//                   <button className="lws-incrementQuantity" onClick={()=>handleIncrement(id, quantity)}>
//                     <i className="text-lg fa-solid fa-plus"></i>
//                   </button>
//                    <span className="lws-cartQuantity">{quantity}</span>
//                   <button className="lws-decrementQuantity" onClick={()=>handleDecrement(id, quantity)}>
//                     <i className="text-lg fa-solid fa-minus"></i>
//                   </button>
//                 </div>
//                 <p className="text-lg font-bold">
//                   BDT <span className="lws-calculatedPrice">{quantity * price}</span>
//                 </p>
//               </div>
//               <div
//                 className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0"
//               >
//                 <button className="lws-removeFromCart" onClick={()=>removeHandler(id)}> 
//                   <i className="text-lg text-red-400 fa-solid fa-trash"></i>
//                 </button>
//               </div>
//             </div>  
    
        
//     );
// };

// export default CartItem;