import { combineReducers } from "redux";
import formReducers from "./Admin/formReducers";
// import formReducers from './Admin/formReducers';


const rootReducer = combineReducers({
    productData: formReducers,
})

export default rootReducer;