import { handleActions } from 'redux-actions';
import { RECEIVE_GETS } from 'api/unfollow'
const defaultState = null
export default handleActions({

    [RECEIVE_GETS]: (state, action) => {
        if (!action.posts) {
            return null
        }
        return action.posts
    }
}, defaultState)