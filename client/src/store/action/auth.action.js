import sendAPI from '../../api/api'
import {generalAction} from "./general.action";

export const authAction = {
    READ_LOGIN: 'READ_LOGIN',
    READ_PASS: 'READ_PASS',
    AUTH: 'AUTH'
}

export const readLogin = (text) => ({
    type: authAction.READ_LOGIN,
    text: text
})

export const readPass = (text) => ({
    type: authAction.READ_PASS,
    text: text
})

export const submit = (data) => {
    return dispatch => {
        sendAPI.auth(data)
            .then((res) => {
                if (res.data === 'ok') {
                    dispatch({type: generalAction.AUTH})
                }
            })
    }
}