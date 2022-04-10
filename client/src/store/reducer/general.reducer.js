import {generalAction} from "../action/general.action";

const initialState = {
    isRegPage: false,
    isAuth: false
}

const generalReducer = (state=initialState, action) => {
    switch (action.type) {
        case generalAction.TOGGLE_PAGE:
            state.isRegPage = !state.isRegPage;
            return state;
        case generalAction.AUTH:
            state.isAuth = !state.isAuth;
            return state;
        default:
            return state;
    }
}

export default generalReducer;