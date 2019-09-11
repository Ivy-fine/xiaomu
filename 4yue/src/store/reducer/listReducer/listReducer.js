import { SAVELIST } from '../../Type'
let listReducer = function (state = [], action) {
    switch (action.type) {
        case SAVELIST:
            return action.list 
        default:
            return state
    }
}

export default listReducer;