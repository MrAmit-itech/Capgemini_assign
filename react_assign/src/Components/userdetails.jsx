import Api from "../Config/axios"
import { useContext, useEffect,useState } from "react"
import {Link} from "react-router-dom"
import Update from "./update"
import Context from "./context"
import { IdContext } from "../Context/Id"



const Userdetails=()=>{
    const [data,setData] = useState([])
    

    // console.log('called simple')
    const GetAlldataHandler=async()=>{
        let response = await Api.get("/user_details")
        response = await response.data
        console.log('res',response)
        setData(response)
        
        // console.log('called from datahandlefunc')
    }
    const Removedatahandler=async(id)=>{
        console.log('i m triggered',data)
        await Api.delete(`/user_details/${id}`)
        
        const newdata = data.filter((el)=>(el.id !== id))
        setData(newdata)
    }

    const {setId} = useContext(IdContext)
    const Handleclick=(id)=>{  
        setId(id)
    }


    useEffect(()=>{
        GetAlldataHandler()
        // console.log('called from useeffect')
    },[])
    

    return<>
        {data.map((el)=>(
            <div key={el.id} className="userblock">
                <div>
                    <span><span className="title">Name: </span>{el.name}</span>
                    <span><span className="title">Email: </span>{el.email}</span>
                </div>
                <div>
                    <span className="del_btn" onClick={()=>Removedatahandler(el.id)}>Delete</span>
                    <span><Link onClick={()=>{Handleclick(el.id)}} className="update_btn" to={"/userdetails/update"}>update</Link></span>
                </div>
            </div>
        ))}
        {data.length === 0?<h1>plz enter some data</h1>:null}
        
    </>
}
export default Userdetails
export {Context}