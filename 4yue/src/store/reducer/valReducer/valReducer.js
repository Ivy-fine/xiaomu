import {INSERT,DELETE} from '../../Type'
let valReducer = function (state = [], action) {
    switch (action.type) {
        case INSERT:
            state.push(action.val)
            return [...state]
        case DELETE:
            state.splice(action.ind, 1)
            return [...state] 
        default:
            return [...state]
    }
}

export default valReducer;