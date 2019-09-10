import {createStore,applyMiddleware,combineReducers} from 'redux'
// import reducer from './reducer/reducer'
import listReducer from './reducer/listReducer'
import countReducer from './reducer/countReducer'
import valReducer from './reducer/valReducer'
import thunk from "redux-thunk"

let rootReducer = combineReducers({
    list:listReducer,
    count:countReducer,
    vlist:valReducer
})
console.log(rootReducer)
// let store = createStore(reducer,applyMiddleware(thunk))
let store = createStore(rootReducer,applyMiddleware(thunk))

export default store;