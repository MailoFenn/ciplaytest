import {changeAction} from "../action/change.action";

const initialState = {
    oldPass: '',
    newPass: '',
    newPassConf: ''
}

const changeReducer = (state=initialState, action) => {
    switch (action.type) {
        case changeAction.READ_OLD_PASS:
            state.OldPass = action.text;
            return state;
        case changeAction.READ_NEW_PASS:
            state.newPass = action.text;
            return state;
        case changeAction.READ_NEW_PASS_CONF:
            state.newPassConf = action.text;
            return state;
        default:
            return state;
    }
}

export default changeReducer;