import { createContext, useState } from "react";

export const IdContext = createContext({Id:"",setId:()=>{}})

export const IdContextProvider = ({children})=>{
    const [Id,setId] = useState(null)

    
    return<IdContext.Provider value={{Id,setId}}>
        {children}
    </IdContext.Provider>
}