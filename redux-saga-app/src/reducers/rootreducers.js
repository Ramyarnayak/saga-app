  
import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import alertReducer from "./alertReducers";
import userReducer from "./userReducers";

const rootReducer = combineReducers({
  cartReducer,
  alertReducer,
  userReducer,
});

export default rootReducer;
