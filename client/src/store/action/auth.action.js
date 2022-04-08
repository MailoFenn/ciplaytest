export const authAction = {
    READ_LOGIN: 'READ_LOGIN',
    READ_PASS: 'READ_PASS'
}

export const readLogin = (text) => ({
    type: authAction.READ_LOGIN,
    text: text
})

export const readPass = (text) => ({
    type: authAction.READ_PASS,
    text: text
})