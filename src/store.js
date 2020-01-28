import { createStore } from "redux";
import rootReducer from "./reducers";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, enhancer);

export default store;
