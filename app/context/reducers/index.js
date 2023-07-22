import {combineReducers} from "redux";
import feedsReducer from "./feedsReducers";

const myReducer = combineReducers({
    feeds: feedsReducer
})

export default myReducer;