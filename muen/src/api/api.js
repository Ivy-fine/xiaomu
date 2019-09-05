import axios from "@/utils/http"

export const login=(params)=> axios.post("/api/login",params)
export const register=(params)=> axios.post("/api/register",params)
export const getallVote=()=> axios.get("/api/vote/allVote")