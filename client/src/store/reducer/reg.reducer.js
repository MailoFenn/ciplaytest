import {regAction} from "../action/reg.action";

const initialState = {
    regLogin: '',
    regPass: '',
    regPassConf: ''
}

const regReducer = (state=initialState, action) => {
    switch (action.type) {
        case regAction.READ_REG_LOGIN:
            state.regLogin = action.text;
            return state;
        case regAction.READ_REG_PASS:
            state.regPass = action.text;
            return state;
        case regAction.READ_REG_PASS_CONF:
            state.regPassConf = action.text;
            return state;
        default:
            return state;
    }
}

export default regReducer;