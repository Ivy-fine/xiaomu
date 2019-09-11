import {createStore,applyMiddleware,combineReducers} from 'redux'
// import reducer from './reducer/reducer'
import listReducer from './reducer/listReducer/listReducer'
import countReducer from './reducer/countReducer/countReducer'
import valReducer from './reducer/valReducer/valReducer'
import thunk from "redux-thunk"
import logger from 'redux-logger'

let rootReducer = combineReducers({
    list:listReducer,
    count:countReducer,
    vlist:valReducer
})
// console.log(rootReducer)
// let store = createStore(reducer,applyMiddleware(thunk))
let store = createStore(rootReducer,applyMiddleware(thunk,logger))

export default store;