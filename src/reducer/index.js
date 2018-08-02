//about页面
const defaultState = {
    isModalOpen: false,
    userInfo: {},
    isAuthenticated: false,
    userInit: 'init'
}
// const initialState = fromJS(defaultState)
const WE_CHAT_LOGIN = 'WE_CHAT_LOGIN'
const GET_USER_INFO = Symbol('GET_USER_INFO')
export default function (state = defaultState, action = {}) {
    switch (action.type) {
        case WE_CHAT_LOGIN:
            console.log('qqqq')
            return Object.assign({ c: 4, d: 5 }, defaultState);
        case GET_USER_INFO: {
            const { response } = action
            if (response.state === 1 && response.result.openid)
                Storage.set('openid', response.result.openid)
            return state
        }

        default:
            return state
    }
}