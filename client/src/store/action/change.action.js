import sendAPI from "../../api/api";
import {message} from "antd";

export const changeAction = {
    READ_OLD_PASS: 'READ_OLD_PASS',
    READ_NEW_PASS: 'READ_NEW_PASS',
    READ_NEW_PASS_CONF: 'READ_NEW_PASS_CONF'
}

export const readOldPass = (text) => ({
    type: changeAction.READ_OLD_PASS,
    text: text
})

export const readNewPass = (text) => ({
    type: changeAction.READ_NEW_PASS,
    text: text
})

export const readNewPassConf = (text) => ({
    type: changeAction.READ_NEW_PASS_CONF,
    text: text
})

export const submit = (data) => {
        sendAPI.change(data)
            .then((res) => {
                if (res.data === 'ok') {
                    message.success('Successful pass changing')
                }
            })
}
