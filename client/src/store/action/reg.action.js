import sendAPI from "../../api/api";
import {message} from "antd";

export const regAction = {
    READ_REG_LOGIN: 'READ_REG_LOGIN',
    READ_REG_PASS: 'READ_REG_PASS',
    READ_REG_PASS_CONF: 'READ_REG_PASS_CONF'
}

export const readRegLogin = (text) => ({
    type: regAction.READ_REG_LOGIN,
    text: text
})

export const readRegPass = (text) => ({
    type: regAction.READ_REG_PASS,
    text: text
})

export const readRegPassConf = (text) => ({
    type: regAction.READ_REG_PASS_CONF,
    text: text
})

export const submit = (data) => {
        sendAPI.reg(data)
            .then((res) => {
                if (res.data === 'ok') {
                    message.success('Successful registration')
                }
            })
}
