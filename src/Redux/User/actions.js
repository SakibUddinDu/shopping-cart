import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"

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