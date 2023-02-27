import { combineReducers } from "redux";
import formReducers from "./Admin/formReducers";
import { userReducers } from "./User/userReducers";
// import formReducers from './Admin/formReducers';


const rootReducer = combineReducers({
    productData: formReducers,
    userData:userReducers,
})

export default rootReducer;