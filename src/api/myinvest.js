import 'whatwg-fetch'
import { baseUrl } from './baseUrl'
// 立即预约请求
//请求开始
export const REQUEST_GETS = 'MYINVEST_INIT_REQUEST_GETS'
function requestGets() {
    return {
        type: REQUEST_GETS
    }
}
//请求完成
export const RECEIVE_GETS = 'MYINVEST_INIT_RECEIVE_GETS'
function receiveGets(json) {
    return {
        type: RECEIVE_GETS,
        posts: json,
        receivedAt: Date.now()
    }
}
//请求过期
export const INVALIDATE_SUBREDDIT = 'MYINVEST_INIT_INVALIDATE_SUBREDDIT'
export function invalidateSubreddit() {
    return {
        type: INVALIDATE_SUBREDDIT
    }
}

export function fetchMyInvestInit(mobile, page) {
    let data = {
        mobile: mobile,
        page: page
    };
    return function (dispatch) {
        dispatch(requestGets())
        return fetch(baseUrl + '/userinfo/investments', {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
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