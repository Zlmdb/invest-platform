import { handleActions } from 'redux-actions';
import { WE_CHAT_LOGIN } from 'action';
//about页面
const defaultState = {
    isModalOpen: false,
    userInfo: {},
    isAuthenticated: false,
    userInit: 'init'
}
export default handleActions({
    [WE_CHAT_LOGIN]:(state, action) => {
        return Object.assign({ c: 4, d: 5 }, defaultState);
    }
}, defaultState)
// export default function (state = defaultState, action = {}) {
//     switch (action.type) {
//         case WE_CHAT_LOGIN:
//             // console.log('qqqq')
//             return Object.assign({ c: 4, d: 5 }, defaultState);
//         case GET_USER_INFO: {
//             const { response } = action
//             if (response.state === 1 && response.result.openid)
//                 Storage.set('openid', response.result.openid)
//             return state
//         }
//         default:
//             return state
//     }
// }



