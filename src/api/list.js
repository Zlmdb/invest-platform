import 'whatwg-fetch'
// import fetchJsonp from 'fetch-jsonp';
import {baseUrl} from './baseUrl'
// 初始化请求
//请求开始
export const REQUEST_GETS = 'LIST_INIT_REQUEST_GETS'
function requestGets() {
    return {
        type: REQUEST_GETS
    }
}
//请求完成
export const RECEIVE_GETS = 'LIST_INIT_RECEIVE_GETS'
function receiveGets(json) {
    // console.log('触发了')
    return {
        type: RECEIVE_GETS,
        posts: json,
        receivedAt: Date.now()
    }
}
//请求过期
export const INVALIDATE_SUBREDDIT = 'LIST_INIT_INVALIDATE_SUBREDDIT'
export function invalidateSubreddit() {
    return {
        type: INVALIDATE_SUBREDDIT
    }
}

export function fetchInit(data) {
    return function (dispatch) {
        dispatch(requestGets())
        return fetch(baseUrl+'/project/list?page='+data, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type':  'application/json' 
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