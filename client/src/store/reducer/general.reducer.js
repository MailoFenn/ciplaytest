import {generalAction} from "../action/general.action";

const initialState = {
    isRegPage: false
}

const generalReducer = (state=initialState, action) => {
    switch (action.type) {
        case generalAction.TOGGLE_PAGE:
            state.isRegPage = !state.isRegPage;
            return state;
        default:
            return state;
    }
}

export default generalReducer;