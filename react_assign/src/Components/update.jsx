import { useContext, useEffect, useState } from "react"
import Api from "../Config/axios"
import Context from "./context"


const Update=()=>{
    const value = useContext(Context)
    const [data,setData] = useState(null)

    useEffect(()=>{
        console.log('value',value,Context)
    },[])

    const Handlechange=(e)=>{
        const{name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
        
    }
    const UpdateDataHandler=async()=>{
        await Api.put(`/user_details/${data.id}`)
    }




    const Handlesubmit=(event)=>{
        event.preventDefault()
        console.log(data)

    }


    return<>
        <form action="#" onSubmit={Handlesubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><input className="input" onChange={Handlechange} type="text" placeholder="Name" required name="name" id="name"/></td>
                    </tr>
                    <tr>
                        <td><input className="input" onChange={Handlechange} type="email" placeholder="E-mail" required name="email" id="email"/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" name="" id="" /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </>
}
export default Update