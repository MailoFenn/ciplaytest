import {authAction} from "../action/auth.action";

const initialState = {
    authLogin: '',
    authPass: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authAction.READ_LOGIN:
            state.authLogin = action.text;
            return state;
        case authAction.READ_PASS:
            state.authPass = action.text;
            return state;
        default:
            return state;
    }
}

export default authReducer;