import { ADD_DATA, REMOVE_DATA } from "./action_types";

export const ADD_TODO =(data)=>({
    type:ADD_DATA,
    payload:data
})

export const REM_TODO =(id)=>({
    type:REMOVE_DATA,
    payload:id
})