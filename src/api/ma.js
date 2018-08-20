import 'whatwg-fetch'
import { baseUrl } from './baseUrl'
// 发送验证码请求
//请求开始
export const REQUEST_GETS = 'MA_REQUEST_GETS'
function requestGets() {
    return {
        type: REQUEST_GETS
    }
}
//请求完成
export const RECEIVE_GETS = 'MA_RECEIVE_GETS'
function receiveGets(json) {
    return {
        type: RECEIVE_GETS,
        posts: json,
        receivedAt: Date.now()
    }
}
//请求过期
export const INVALIDATE_SUBREDDIT = 'MA_INVALIDATE_SUBREDDIT'
export function invalidateSubreddit() {
    return {
        type: INVALIDATE_SUBREDDIT
    }
}

export function fetchMa(data) {
    return function (dispatch) {
        dispatch(requestGets())
        return fetch(baseUrl + '/userinfo/code?mobile=' + data, {
            methods: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveGets(json))
            )
            .catch(err => {
                console.error(err);
            })
    }
}