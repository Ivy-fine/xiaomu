import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import list from './reducer/list/listreducer'
import shopcart from './reducer/shopcart/shopreducer'
let reducer = combineReducers({
    list,
    shopcart
})

let store = createStore(reducer,applyMiddleware(thunk,logger))

export default store;