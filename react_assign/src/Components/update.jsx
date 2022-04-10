import { useContext,  useState } from "react"
import Api from "../Config/axios"
import { IdContext } from "../Context/Id"



const Update=()=>{
    const [data,setData] = useState(null)
    const [warn,setWarn] = useState(false)
    const {Id} = useContext(IdContext)

    // useEffect(()=>{
    //     console.log('id',Id)
    // },[])

    const Handlechange=(e)=>{
        const{name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
        
    }
    const UpdateDataHandler=async()=>{
        const response = await Api.put(`/user_details/${Id}`,data)
        console.log('respo',response.data)
        if(response.status === 200){
            setWarn(true)
        }
    }




    const Handlesubmit=(event)=>{
        event.preventDefault()
        UpdateDataHandler()

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
                    <tr>
                        {warn?<span style={{color:"green"}}>data updated succesfully</span>:null}
                    </tr>
                </tbody>
            </table>
        </form>
    </>
}
export default Update