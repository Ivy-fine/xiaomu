let data = {
    list: [],
    count: 0,
    vlist:[]
};

let reducer = function (state = data, action) {
    switch (action.type) {
        case 'SAVELIST':
            return { ...data, list: action.list }
        case 'ADD':
            state.count++;
            return { ...state }
        case 'SUB':
            state.count--;
            return { ...state }
        case "INSERT":
            state.vlist.push(action.val)
            return {...state,vlist:[...state.vlist]}
        case "DELETE":
            state.vlist.splice(action.ind,1)
            return {...state,vlist:[...state.vlist]}
        default:
            return { ...state };
    }
}

export default reducer;