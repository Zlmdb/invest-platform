import 'whatwg-fetch'
import { baseUrl } from './baseUrl'
// 初始化请求
//请求开始
export const REQUEST_GETS = 'DETAIL_INIT_REQUEST_GETS'
function requestGets() {
    return {
        type: REQUEST_GETS
    }
}
//请求完成
export const RECEIVE_GETS = 'DETAIL_INIT_RECEIVE_GETS'
function receiveGets(json) {
    return {
        type: RECEIVE_GETS,
        posts: json,
        receivedAt: Date.now()
    }
}
//请求过期
export const INVALIDATE_SUBREDDIT = 'DETAIL_INIT_INVALIDATE_SUBREDDIT'
export function invalidateSubreddit() {
    return {
        type: INVALIDATE_SUBREDDIT
    }
}

export function fetchInit(mobile,id) {
    
    let data = {
        id: id,
        mobile: mobile
    };
    console.log(data)
    return function (dispatch) {
        dispatch(requestGets())
        return fetch(baseUrl +'/project/detail', {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data),
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