import { ADDCART, CHECKONE, CHECKALL, CHANGECOUNT, DEL } from '../../types'

const all = (arr) => {
    return arr.every(item => item.checked)
}
const sum = (arr) => {
    return arr.reduce((prev, cur) => {
        return prev + (cur.checked ? cur.count * cur.price : 0)
    }, 0).toFixed(2)
}
function shopreducer(state = { cartlist: [], checkall: false, sumPrice: 0 }, action) {
    switch (action.type) {
        case ADDCART: {
            action.obj.checked = false;
            let ind = state.cartlist.findIndex(item => item.id === action.obj.id);
            if (ind === -1) {
                state.cartlist.push(action.obj);
            } else {
                state.cartlist[ind].count++;
            }
            return {
                ...state,
                cartlist: [...state.cartlist]
            }
        }
        case CHECKONE: {
            let { ind, flag } = action;
            state.cartlist[ind].checked = flag;
            state.checkall = all(state.cartlist);
            state.sumPrice = sum(state.cartlist)
            return {
                ...state,
                cartlist: [...state.cartlist]
            }
        }
        case CHECKALL:
            state.checkall = action.flag;
            state.cartlist.forEach(item => item.checked = state.checkall)
            state.sumPrice = sum(state.cartlist)
            return {
                ...state,
                cartlist: [...state.cartlist]
            }
        case CHANGECOUNT: {
            let { ind, count } = action;
            if (count !== 0) {
                state.cartlist[ind].count = count;
            }
            state.sumPrice = sum(state.cartlist)
            return {
                ...state,
                cartlist: [...state.cartlist]
            }
        }
        case DEL:
            state.cartlist = state.cartlist.filter(item => item.id !== action.id)
            state.checkall = all(state.cartlist);
            state.sumPrice = sum(state.cartlist)
            if(state.cartlist.length===0){
                state.checkall = false;
            }
            return {
                ...state,
                cartlist: [...state.cartlist]
            }
        default:
            return {
                ...state,
                cartlist: [...state.cartlist]
            }
    }
}

export default shopreducer;