
import {Link} from "react-router-dom"
import { useState } from "react"
import Api from "../Config/axios"
import {v4 as uuidv4} from "uuid"




const SignUp=()=>{
    const[data,setData] = useState({})
    const[warn,setWarn] = useState(false)
    const[passwarn,setPasswarn] = useState(null)
    const[contact_len,setContact_len] = useState(null)

    const Passcheck=(e)=>{
        var pass = e.target.value

        let condition1 = /[a-z]/g
        let condition2 = /[A-Z]/g
        let condition3 = /[0-9]/g
        let condition4 = /[@,$,#,%,!,~]/g
 
        if(condition1.test(pass) && (condition2.test(pass) && (condition3.test(pass) && (condition4.test(pass))))){
            setPasswarn(true)
         }else{
            setPasswarn(false)
        }
    }
    const contact_Length_check=(e)=>{
        var input = e.target.value
        if(input.length === 10){
            setContact_len(true)
        }else{
            setContact_len(false)
        }

    }
    const Handlechange=(e)=>{
        const{ name,value } = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    // const GetAlldataHandler=async()=>{
    //     let response = await Api.get("/user_details")
    //     response = await response.data
    //     console.log('res',response)
    // }
    const PostdataHandler=async()=>{
        const request = {
            id:uuidv4(),
            ...data
        }
        let response = await Api.post("/user_details",request)
        if(response.status === 201){
            setWarn(true)
        }
        response = await response.data
        console.log('post respo',response)
    }

    const Handlesubmit=(event)=>{
        event.preventDefault()
        console.log('data is',data)
        console.log('uuid->',uuidv4())
        // document.getElementById("myform").reset()

        PostdataHandler()
    }




    return<>
        <div id="cont">
            <form id="myform" action="#" onSubmit={Handlesubmit}  >
                <table>
                    <tbody>
                        <tr>
                            <td><h1 id="heading">SIGN UP</h1></td>
                        </tr>
                        <tr>
                            <td><input className="input" onChange={Handlechange} type="text" placeholder="Name" required name="name" id="name"/></td>
                        </tr>
                        <tr>
                            <td><input className="input" onChange={Handlechange} type="email" placeholder="E-mail" required name="email" id="email"/></td>
                        </tr>
                        <tr className="flex">
                            <td><input className="input" onInput={Passcheck} maxLength="8" onChange={Handlechange} type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password" name="password" id="password" required/></td>
                            {passwarn  ? <span className="right">Correct</span>: passwarn === false ? <span className="wrong">plz enter in the format [a-z],[A-Z],[0-9] upto length 8</span>:null }
                            
                        </tr>
                        <tr className="flex">
                            <td><input className="input"  onInput={contact_Length_check}  onChange={Handlechange} type="number" placeholder="Contact" name="contact" id="contact" required/></td>
                           {contact_len ? <span className="right">Correct</span>:contact_len === false ? <span className="wrong">plzz enter 10 digit number</span>:null}
                        </tr>
                        <tr>
                            <td><input className="input" onChange={Handlechange} type="text" placeholder="City" name="city" id="city" required/></td>
                        </tr>
                        <tr>
                            <td><input className="input" onChange={Handlechange} type="text" placeholder="Address" name="address" id="address" required/></td>
                        </tr>
                        <tr>
                            <td ><input id="btn"  type="submit" /></td>
                        </tr>
                        <tr>
                            {warn?<span style={{color:"green"}}>data submitted successfully</span>:null}
                        </tr>
                        <tr>
                            <td><span>Already have an account?</span><span id="login_link"><Link  to={"/Login"}>Login here</Link></span></td>
                        </tr>
        
                    </tbody>
                </table>
            </form>
        </div>
    </>
}
export default SignUp