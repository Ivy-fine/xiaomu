import { SAVELIST } from "../../types";
function listreducer(state=[],action){
    switch(action.type){
        case SAVELIST:
            return action.list;
        default:
            return [...state]
    }
}

export default listreducer;