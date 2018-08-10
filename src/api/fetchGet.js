import 'whatwg-fetch'
//请求开始
export const REQUEST_GETS = 'REQUEST_GETS'
function requestGets() {
    return {
        type: REQUEST_GETS
    }
}
//请求完成
export const RECEIVE_GETS = 'RECEIVE_GETS'
function receiveGets(json) {
    return {
        type: RECEIVE_GETS,
        posts: json,
        receivedAt: Date.now()
    }
}
//请求过期
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit() {
    return {
        type: INVALIDATE_SUBREDDIT
    }
}


export function fetchGets(url, isJson) {
    // 以此来让它自己也能 dispatch action。
    return function (dispatch) {
        // 首次 dispatch：API 请求发起了。
        dispatch(requestGets())
        // https://api2.fang88.com/info/list
        // http://news.baidu.com/
        return fetch(url, {
            methods: 'GET',
            // credentials: 'include',//资格证书
            headers: {
                // 'Accept': 'application/json, text/plain, */*',
                'Content-Type': isJson ? 'application/json' : 'application/x-www-form-urlencoded'
            }
        })
            .then(
                response => response.json(),
                // 不要使用 catch，因为会捕获在 dispatch 和渲染中出现的任何错误，导致 'Unexpected batch number' 错误。
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                // 可以多次 dispatch！这里，使用 API 请求结果来更新应用的 state。
                dispatch(receiveGets(json))
            )
            .catch(err => {
                console.error(err);
            })
    }
}