// import fetch from 'cross-fetch'
import 'whatwg-fetch'
// import Promise from 'promise-polyfill';
// import fetchJsonp from 'fetch-jsonp';
// 第一个请求
//请求开始
export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}
//请求完成
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}
//请求过期
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}


export function fetchPosts(subreddit) {
    // 以此来让它自己也能 dispatch action。
    return function (dispatch) {
        // 首次 dispatch：API 请求发起了。
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.subreddit.com/r/${subreddit}.json`, {
            methods: 'GET',
            // credentials: 'include',//资格证书
            headers: {
                // 'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            // body: "a=1&b=100"
           })
            .then(
                response => response.json(),
                // 不要使用 catch，因为会捕获在 dispatch 和渲染中出现的任何错误，导致 'Unexpected batch number' 错误。
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                // 可以多次 dispatch！这里，使用 API 请求结果来更新应用的 state。
                dispatch(receivePosts(subreddit, json))
            )
            .catch(err =>{
                console.error(err);
            })
    }
}
// 第二个请求
//请求开始
export const REQUEST_POSTS2 = 'REQUEST_POSTS2'
function requestPosts2(subreddit) {
    return {
        type: REQUEST_POSTS2,
        subreddit
    }
}
//请求完成
export const RECEIVE_POSTS2 = 'RECEIVE_POSTS2'
function receivePosts2(subreddit, json) {
    return {
        type: RECEIVE_POSTS2,
        subreddit,
        posts: json,
        // receivedAt: Date.now()
    }
}
//请求过期
export const INVALIDATE_SUBREDDIT2 = 'INVALIDATE_SUBREDDIT2'
export function invalidateSubreddit2(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT2,
        subreddit
    }
}


export function fetchPosts2(subreddit) {
    // 以此来让它自己也能 dispatch action。
    return function (dispatch) {
        // 首次 dispatch：API 请求发起了。
        dispatch(requestPosts2(subreddit))
        // https://api2.fang88.com/info/list
        // http://news.baidu.com/
        return fetch(`/info/list`, {
            methods: 'POST',
            // credentials: 'include',//资格证书
            headers: {
                // 'Accept': 'application/json, text/plain, */*',
                // 'Content-Type': 'application/x-www-form-urlencoded'
                'Content-Type': 'application/json'
            },
            // body: {
            //     page:1
            // }
        })
            .then(
                response => response.json(),
                // 不要使用 catch，因为会捕获在 dispatch 和渲染中出现的任何错误，导致 'Unexpected batch number' 错误。
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                // 可以多次 dispatch！这里，使用 API 请求结果来更新应用的 state。
                dispatch(receivePosts2(subreddit, json))
            )
            .catch(err =>{
                console.error(err);
            })
    }
}