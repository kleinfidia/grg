import { combineReducers } from "redux";
import feedsReducers from "./feedsReducers";

const myReducer = combineReducers({
    feeds: feedsReducers,
});

export default myReducer;