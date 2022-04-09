import {combineReducers} from "redux";
import authReducer from "./auth.reducer";
import regReducer from "./reg.reducer";
import generalReducer from "./general.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    reg: regReducer,
    general: generalReducer
})

export default rootReducer;