// import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from './actionTypes';
// import { initialState } from './initialState';


// export const userReducers =(state = initialState, action)=>{
//     const selectedCartProduct =state.cart.find((cartItem)=>cartItem.id === action.payload.id);
//     switch (action.type) {
//         case ADD_TO_CART:
//             if(selectedCartProduct){
//                 const newCart = state.cart.filter((product) => product.id !== selectedCartProduct.id)//selected gulu baad
//                 selectedCartProduct.quantity = selectedCartProduct.quantity + 1;
//                 console.log(newCart)

//                 return {
//                     ...state, 
//                     cart: [...newCart, selectedCartProduct]// quantity  ek barie state return
//                 }
//             }
          
//             return {
//                 ...state,
//                 cart: [...state.cart, {...action.payload, quantity: 1} ]//// quantity  ek jog state return
//               };
            
        
//         case REMOVE_FROM_CART:
//             if(selectedCartProduct > 1){
//                 const newCart = state.cart.filter((product) => product.id !== selectedCartProduct.id)
//                 selectedCartProduct.quantity = selectedCartProduct.quantity - 1;//-
//                 console.log(newCart)

//                 return {
//                     ...state, 
//                     cart: [...newCart, selectedCartProduct]
//                 }
//             }
//             return {
//                 ...state,
//                 cart: state.cart.filter((cart) => cart.id !== action.payload)
//             } 
            
//         case INCREMENT_QUANTITY:
//             const incrementCartItem = state.cart.map((cart) => {
//                         if (cart.id === action.payload.id) {
//                             return {
//                                 ...cart,
//                                 quantity: cart.quantity + 1,
//                             };
//                         }
//                         return cart;
//                     });
//                     return {
//                         ...state,
//                         cart: incrementCartItem,
//                     };
//         case DECREMENT_QUANTITY:
//             const decrementCartItem = state.cart.map((cart) => {
//                         if (cart.id === action.payload.id) {
//                             return {
//                                 ...cart,
//                                 quantity: cart.quantity -1,
//                             };
//                         }
//                         return cart;
//                     });
//                     return {
//                         ...state,
//                         cart: decrementCartItem,
//                     };
            
//         default:
//             return state;
//     }
// }
import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from './actionTypes';
import { initialState } from './initialState';


export const userReducers =(state = initialState, action)=>{
    const selectedCartProduct =state.cart.find((cartItem)=>cartItem.id === action.payload.id);
    switch (action.type) {
        case ADD_TO_CART:
            if(selectedCartProduct){
                const newCart = state.cart.filter((product) => product.id !== selectedCartProduct.id)//selected gulu baad
                selectedCartProduct.quantity = selectedCartProduct.quantity + 1;
                console.log(newCart)

                return {
                    ...state, 
                    cart: [...newCart, selectedCartProduct]// quantity  ek barie state return
                }
            }
          
            return {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1} ]//// quantity  ek jog state return
              };
            
        
        case REMOVE_FROM_CART:
            if(selectedCartProduct > 1){
                const newCart = state.cart.filter((product) => product.id !== selectedCartProduct.id)
                selectedCartProduct.quantity = selectedCartProduct.quantity - 1;//-
                console.log(newCart)

                return {
                    ...state, 
                    cart: [...newCart, selectedCartProduct]
                }
            }
            return {
                ...state,
                cart: state.cart.filter((cart) => cart.id !== action.payload)
            } 
            
        case INCREMENT_QUANTITY:
            const incrementCartItem = state.cart.map((cart) => {
                        if (cart.id === action.payload.id) {
                            return {
                                ...cart,
                                quantity: cart.quantity + 1,
                            };
                        }
                        return cart;
                    });
                    return {
                        ...state,
                        cart: incrementCartItem,
                    };
        case DECREMENT_QUANTITY:
            const decrementCartItem = state.cart.map((cart) => {
                        if (cart.id === action.payload.id) {
                            return {
                                ...cart,
                                quantity: cart.quantity -1,
                            };
                        }
                        return cart;
                    });
                    return {
                        ...state,
                        cart: decrementCartItem,
                    };
            
        default:
            return state;
    }
}