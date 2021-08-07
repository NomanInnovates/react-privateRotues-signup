import { createStore, applyMidlleware } from "react-redux";
import thunk from "redux-thunk";
import RootReducer from "../store/RootReducer";
const store = createStore(RootReducer, applyMidlleware(thunk));
export default store;
