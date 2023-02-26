import { ADD_PRODUCTS } from './actionTypes';

export const addProduct = (formData)=>{
    return{
        type: ADD_PRODUCTS,
        payload: formData
    }
}