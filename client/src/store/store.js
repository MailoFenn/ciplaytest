import {createStore, applyMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index.reducer";

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;