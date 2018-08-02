import { handleActions } from 'redux-actions';
import { RECEIVE_POSTS } from 'api/about'

export default handleActions({
    [RECEIVE_POSTS]:(state, action)=>{
            return action.posts
    }
}, {})
// export default function (state = {}, action = {}) {
//     switch (action.type) {
//         case RECEIVE_POSTS: {
//             return action.posts
//         }
//         default:
//             return state
//     }
// }