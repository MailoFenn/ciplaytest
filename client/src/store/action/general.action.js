export const generalAction = {
    TOGGLE_PAGE: 'TOGGLE_PAGE',
    AUTH: 'AUTH'
}

export const togglePage = () => ({
    type: generalAction.TOGGLE_PAGE
})

export const auth = () => ({
    type: generalAction.AUTH
})