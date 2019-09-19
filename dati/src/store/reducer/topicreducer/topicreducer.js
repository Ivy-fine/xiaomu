import { TOPICIND, SAVELIST, SELECTOPT, SUBMIT } from "../../types";
function topicreducer(state = {
    ind: 0,
    list: [],
    length: 0,
    curTopic: {},
    startTime: 0,
    endTime: 0,
    count: 0,
    duringtime: ''
}, action) {
    switch (action.type) {
        case SAVELIST: {
            state.list = action.list;
            state.length = action.list.length;
            state.curTopic = state.list[state.ind]
            state.startTime = new Date() * 1
            return {
                ...state,
                list: [...state.list],
                curTopic: { ...state.curTopic }
            }
        }
        case TOPICIND:
            state.ind = action.ind
            state.curTopic = state.list[state.ind]
            return {
                ...state,
                curTopic: { ...state.curTopic }
            }
        case SELECTOPT: {
            let { ind } = state;
            state.list[ind].selected = action.id
            state.ind++;
            if (state.ind >= state.length - 1) state.ind = state.length - 1
            state.curTopic = state.list[state.ind]
            return {
                ...state,
                list: [...state.list],
                curTopic: { ...state.curTopic }
            }
        }
        case SUBMIT: {
            state.endTime = new Date() * 1
            let time = (state.endTime - state.startTime) / 1000;
            let s = Math.floor(time % 60)
            let m = Math.floor(time / 60 % 60)
            state.duringtime = m + '分' + s + '秒'
            state.count = state.list.filter(item => item.selected === item.correct).length
            return {
                ...state
            }
        }
        default:
            return {
                ...state,
                list: [...state.list],
                curTopic: { ...state.curTopic }
            }
    }
}
export default topicreducer;