import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "./actionTypes"

export const addToCart =(productData)=>{
    return {
        type:ADD_TO_CART,
        payload: {
            ...productData,
        }
    }
}
export const removeFromCart =(id)=>{
    return {
        type:REMOVE_FROM_CART,
        payload: id
    }
}
export const incrementQuantity =(id, quantity)=>{
    return {
        type:INCREMENT_QUANTITY,
        payload: {
            id, 
            quantity
        }
    }
}
export const decrementQuantity =(id, quantity)=>{
    return {
        type:DECREMENT_QUANTITY,
        payload: {
            id, 
            quantity
        }
    }
}