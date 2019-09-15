import axios from 'axios'
import { SAVELIST } from "../../types";
let getlist = async (dispatch)=>{
    let res = await axios.get("/getlist")
    dispatch({type:SAVELIST,list:res.data})
}

export default getlist;