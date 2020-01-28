import { combineReducers } from "redux";
import pizzaReducer from "./pizzaReducer";
import authReducer from "./authReducer";

export default combineReducers({
  pizzaState: pizzaReducer,
  authState: authReducer
});
