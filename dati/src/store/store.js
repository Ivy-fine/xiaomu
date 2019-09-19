import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import topic from './reducer/topicreducer/topicreducer'

let reducer =combineReducers({
    topic
})
let store = createStore(reducer,applyMiddleware(thunk,logger))

export default store;