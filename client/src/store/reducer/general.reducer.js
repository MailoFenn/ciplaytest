import {generalAction} from "../action/general.action";

const initialState = {
    isRegPage: false,
    isAuth: (sessionStorage.getItem('isAuth') === 'true')
}

const generalReducer = (state=initialState, action) => {
    switch (action.type) {
        case generalAction.TOGGLE_PAGE:
            state.isRegPage = !state.isRegPage;
            return state;
        case generalAction.AUTH:
            state.isAuth = !state.isAuth;
            sessionStorage.setItem('isAuth', String(state.isAuth))
            return state;
        default:
            return state;
    }
}

export default generalReducer;