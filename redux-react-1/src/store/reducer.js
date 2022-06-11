import { ADD_TODO, REM_TODO } from "./action";

const init = {todos:[]}

export const Reducer =(state = init,{type,payload})=>{
    switch(type){
        case ADD_TODO:
                return{
                    ...state,
                    todos:[...state.todos,payload]
                }
                default:
                    return state
    }
}