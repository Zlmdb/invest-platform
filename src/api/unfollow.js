import 'whatwg-fetch'
import { baseUrl } from './baseUrl'
// 立即预约请求
//请求开始
export const REQUEST_GETS = 'UNFOLLOW_REQUEST_GETS'
function requestGets() {
    return {
        type: REQUEST_GETS
    }
}
//请求完成
export const RECEIVE_GETS = 'UNFOLLOW_RECEIVE_GETS'
function receiveGets(json) {
    return {
        type: RECEIVE_GETS,
        posts: json,
        receivedAt: Date.now()
    }
}
//请求过期
export const INVALIDATE_SUBREDDIT = 'UNFOLLOW_INVALIDATE_SUBREDDIT'
export function invalidateSubreddit() {
    return {
        type: INVALIDATE_SUBREDDIT
    }
}

export function fetchUnFollow(mobile, id) {
    let data = {
        mobile: mobile,
        project_id: id
    };
    // let formData = new FormData();
    // formData.append("mobile", mobile);
    // formData.append("code", ma);

    return function (dispatch) {
        dispatch(requestGets())
        return fetch(baseUrl + '/userinfo/unfollow', {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data),
            // body: formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            // headers: {
            //     'Accept': 'application/x-www-form-urlencoded',
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // }
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