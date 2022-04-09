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