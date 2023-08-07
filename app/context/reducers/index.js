import { combineReducers } from "redux";
import feedsReducers from "./feedsReducers";
import cartReducer from "./cartReducer";

const myReducer = combineReducers({
    feeds: feedsReducers,
    cartItems: cartReducer,
});

export default myReducer;