import { handleActions } from 'redux-actions';
import { RECEIVE_POSTS2 } from 'api/about'
const defaultState = {
    
    nfjdfdjf: '你啊好'
}
export default handleActions({
    
    [RECEIVE_POSTS2]: (state, action) => {
        if (!action.posts) {
            return null
        }
        return action.posts
    }
}, defaultState)
