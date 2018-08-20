import { handleActions } from 'redux-actions';
import { RECEIVE_GETS } from 'api/myappoint'
const defaultState = {}
export default handleActions({

    [RECEIVE_GETS]: (state, action) => {
        if (!action.posts) {
            return null
        }
        return action.posts
    }
}, defaultState)