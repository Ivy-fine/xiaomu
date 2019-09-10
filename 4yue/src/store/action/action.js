import Axios from "axios"

function savelist(list){
    return {
        type:'SAVELIST',
        list
    }
}


function request_list(){
    return (dispatch,getState)=>{
        Axios.get("/getlist").then(res=>{
            dispatch(savelist(res.data))
        })
    }
}

export {
    request_list
}