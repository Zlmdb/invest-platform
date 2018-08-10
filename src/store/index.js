import { createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
import about from 'reducer/pages/about/about'
import about2 from 'reducer/pages/about/about2'
import about3 from 'reducer/pages/about/about3'
import question from 'reducer/pages/question/question'
import listInit from 'reducer/pages/list/init'
import detailInit from 'reducer/pages/detail/init'
// import * as reducers from 'reducer'//所有的reducer放在一个文件里面


// const logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }

// const crashReporter = store => next => action => {
//     try {
//         return next(action)
//     } catch (err) {
//         console.error('Caught an exception!', err)
//         Raven.captureException(err, {
//             extra: {
//                 action,
//                 state: store.getState()
//             }
//         })
//         throw err
//     }
// }
//所有的reducer放在一个文件里面
// const rootReducer = combineReducers(
//     reducers
// )
const rootReducer = combineReducers({
    about,
    about2,
    about3,
    question,
    listInit,
    detailInit
})
const store = createStore(rootReducer, applyMiddleware(thunk,promise))
// const store = createStore(rootReducer, applyMiddleware(thunk,promise,logger))
export default store