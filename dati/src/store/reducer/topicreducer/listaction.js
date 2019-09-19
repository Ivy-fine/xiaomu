import axios from 'axios'
import { SAVELIST } from "../../types";
export const getlist = async (dispatch)=>{
    let res = await axios.get("/getdata")
    dispatch({type:SAVELIST,list:res.data})
}
