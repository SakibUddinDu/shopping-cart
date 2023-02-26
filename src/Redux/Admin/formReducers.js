import { ADD_PRODUCTS } from "./actionTypes";
import { initialState } from "./initialState";

const formReducers =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_PRODUCTS:
            return [
                ...state,
                {
                    id:Math.floor(Math.random() * (10000 - 1) + 1),
                    ...action.payload
                }
                
            ];
    
        default:
            return state;
    }
}
export default formReducers;