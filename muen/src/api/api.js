import axios from "@/utils/http"
//登录
export const login=(params)=> axios.post("/api/login",params)
//注册
export const register=(params)=> axios.post("/api/register",params)
//所有投票
export const getallVote=()=> axios.get("/api/vote/allVote")
//发起投票
export const newVote=(params)=>axios.post("/api/vote/newvote",params)
//小组
export const getgrouplist=()=> axios.get("/api/group/list")