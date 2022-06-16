import { useEffect } from "react"
import { useRef, useState } from "react"
import {  useNavigate } from "react-router-dom"
import "../css/MyStyle.css"

export const Login=()=>{
    let navigate = useNavigate()

    const [data,setData] = useState(null)

    //use camel case below
    const [flag_username,setFlag_username] = useState(null)
    const [flag_address,setFlag_address] = useState(null)
    const [flag_email,setFlag_Email] = useState(null)


    const username_ref = useRef() 
    const address_ref = useRef()
    const email_ref = useRef() 

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('user_detail') === null)){
            var arr = []
            localStorage.setItem('user_detail',JSON.stringify(arr))
        }
    },[])

    const HandleChange=()=>{
        
        setData(
            {
                username:username_ref.current.value,
                address:address_ref.current.value,
                email:email_ref.current.value
            }
        )
        // console.log('handlechange->',data)
    }


    const HandleBlur=(event)=>{
        console.log('blur value', event.target.value)
        const {name,value} = event.target

        if(name === 'username'){
            const condition1 = /^[a-z0-9]+$/i
            if(condition1.test(value)){
                setFlag_username(true)
                // console.log('username is valid')
            }else if(value){
                setFlag_username(false)
                // console.log('username invalid=>',value)
            }
        }
        if(name === 'address'){
            const condition2 = /^[#.0-9a-zA-Z\s,-]+$/g
            if(condition2.test(value)){
                setFlag_address(true)
                // console.log('address is valid')
            }else if(value){
                setFlag_address(false)
                // console.log('address is invalid')
            }
        }
        if(name === 'email'){
            //email validation RFC 5322
            let condition3 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if(condition3.test(value)){
                setFlag_Email(true)
                // console.log('email is valid')
            }else if(value){
                setFlag_Email(false)
                // console.log('email is invalid')
            }
        }
    }

    
    const StoreData=()=>{   
        let arr = JSON.parse(localStorage.getItem('user_detail'))
        arr.push(data)
        localStorage.setItem('user_detail',JSON.stringify(arr))
        console.log('submitted data',data)
    }

    const AlertMsg=()=>{
        let time = 4
        const DisplayAlert=()=>{
            let h4 = document.createElement("h4")
            // h4.setAttribute("id","submit")
            h4 = `data submitted successfully will redirect to next page in ${time} secs`
            document.getElementById('alert').textContent = h4
    
            if(time === 0){
                navigate("/details")
                clearInterval(timer)
            }
            time--
        }
        const timer = setInterval(DisplayAlert,1000)
    }
    
    const HandleSubmit=(event)=>{
        event.preventDefault()

        if(flag_address && flag_email && flag_username){
            // console.log('all are true')
            StoreData()
            AlertMsg()
        }else{
            window.alert('Please enter correct data')
            // console.log('something is gojng wrong')
        }
        
    }

    return<>
       
        <div className="login">
            <form onSubmit={HandleSubmit} action="">
                <fieldset>
                    <legend> Sign Up</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>User name</td>
                                <td><input ref={username_ref} onChange={HandleChange} onBlur={HandleBlur} placeholder="alphanumeric characters" required type="text" minLength={6} maxLength={9} name="username" id="" /></td>
                                <td>{flag_username ? <span className="valid">username is valid</span> : flag_username === false ? <span className="invalid">Invalid (Only alphanumeric characters are allowed min 6 length) </span>:null}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td><input ref={address_ref} onChange={HandleChange} onBlur={HandleBlur} placeholder="enter address" required type="text" name="address" id="" /></td>
                                <td>{flag_address ? <span className="valid">address is valid</span> : flag_address === false ? <span className="invalid">Invalid (Special characters,Symbols not allowed)</span>:null}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input ref={email_ref} onChange={HandleChange} onBlur={HandleBlur} placeholder="enter email" required type="email" name="email" id="" /></td>
                                <td>{flag_email ? <span className="valid">email is valid</span> : flag_email === false ? <span className="invalid">Email is invalid</span>:null}</td>
                            </tr>
                            <tr>
                                <td><input type="submit"  /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td id="alert"></td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </form>
        </div>
    </>
}