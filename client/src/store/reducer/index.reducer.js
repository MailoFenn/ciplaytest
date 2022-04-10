import {combineReducers} from "redux";
import authReducer from "./auth.reducer";
import regReducer from "./reg.reducer";
import generalReducer from "./general.reducer";
import changeReducer from "./change.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    reg: regReducer,
    change: changeReducer,
    general: generalReducer
})

export default rootReducer;