import {ADD,SUB} from '../../Type'
let coutnReducer = function (state = 0, action) {
    switch (action.type) {
        case ADD:
            state++;
            return state
        case SUB:
            state--;
            return state
        default:
            return state;
    }
}

export default coutnReducer;