import { ADD_PRODUCTS, CARD_QUANTITY_DECREASER } from './actionTypes';

export const addProduct = (formData)=>{
    return{
        type: ADD_PRODUCTS,
        payload: formData
    }
}
export const cardQuantityDecreser= (id, quantity)=>{
    return{
        type: CARD_QUANTITY_DECREASER,
        payload: {
            id,
            quantity
        }
    }
}