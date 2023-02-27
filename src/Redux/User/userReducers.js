import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import { initialState } from './initialState';


export const userReducers =(state = initialState, action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            // const newCartProduct =state.cart.filter((cartItem)=>cartItem.id !== action.payload.id);
            const selectedCartProduct =state.cart.find((cartItem)=>cartItem.id === action.payload.id);
            console.log(selectedCartProduct);

            if(selectedCartProduct){
                const newCart = state.cart.filter((product) => product.id !== selectedCartProduct.id)
                selectedCartProduct.quantity = selectedCartProduct.quantity + 1;
                console.log(newCart)

                return {
                    ...state, 
                    cart: [...newCart, selectedCartProduct]
                }
            }

            return {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1} ]
              };
        
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((cart) => cart.id !== action.payload)
            }      
        default:
            return state;
    }
}