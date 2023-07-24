import {configureStore} from "@reduxjs/toolkit";
import myReducer from "./reducers";

const store = configureStore({
    reducer: myReducer
});

export default store;




// import{createStore} from "redux";
// import myReducer from "./reducers";

// const store = createStore(myReducer);

// export default store;