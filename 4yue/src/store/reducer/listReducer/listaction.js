import Axios from "axios"
import { SAVELIST } from '../../Type'

// export const request_list = ()=>{
//     return async (dispatch) => {
//         let res = await Axios.get("/getlist")
//         dispatch({ type: SAVELIST, list: res.data })
//     }
// }

export const getlist = async (dispatch) => {
    let res = await Axios.get("/getlist")
    dispatch({ type: SAVELIST, list: res.data })
}