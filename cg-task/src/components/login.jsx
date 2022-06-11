import { useEffect } from "react"
import { useRef, useState } from "react"
import "../css/MyStyle.css"

export const Login=()=>{

    const [data,setData] = useState(null)

    const [flag_username,setFlag_username] = useState(null)
    const [flag_address,setFlag_address] = useState(null)
    const [flag_email,setFlag_Email] = useState(null)


    const username_ref = useRef() 
    const address_ref = useRef()
    const email_ref = useRef() 

    useEffect(()=>{
        if(JSON.parse(window.localStorage.getItem('user_detail') === null)){
            window.localStorage.setItem('user_detail',JSON.stringify([]))
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
        console.log('handlechange->',data)
    }


    const HandleBlur=(event)=>{
        console.log('blur value', event.target.value)
        const {name,value} = event.target

        if(name === 'username'){
            const condition1 = /^[a-z0-9]+$/i
            if(condition1.test(value)){
                setFlag_username(true)
                console.log('username is valid')
            }else if(value){
                setFlag_username(false)
                console.log('username invalid=>',value)
            }
        }
        if(name === 'address'){
            const condition2 = /^[#.0-9a-zA-Z\s,-]+$/g
            if(condition2.test(value)){
                setFlag_address(true)
                console.log('address is valid')
            }else if(value){
                setFlag_address(false)
                console.log('address is invalid')
            }
        }
        if(name === 'email'){
            //email validation RFC 5322
            let condition3 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if(condition3.test(value)){
                setFlag_Email(true)
                console.log('email is valid')
            }else if(value){
                setFlag_Email(false)
                console.log('email is invalid')
            }
        }
    }

    
    
    const HandleSubmit=(event)=>{
        event.preventDefault()

        let arr = JSON.parse(window.localStorage.getItem('user_detail' || []))
        console.log('arr',arr,typeof(arr))
        let new_arr = arr.push(data)
        localStorage.setItem('user_detail',JSON.stringify(new_arr))
        
        
        console.log('submitted data',data)



        
        let time = 4
        const Alert=()=>{
            let h4 = document.createElement("h4")
            h4 = `data submitted successfully will redirect to next page in ${time} secs`
            document.getElementById('alert').innerText = h4

            if(time === 0){
                clearInterval(timer)
            }
            time--
        }
        if(time === 0){
            window.location.href = <details/>
        }

        const timer = setInterval(Alert,1000)
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
                                <td>{flag_email ? <span className="valid">email is valid</span> : flag_email === false ? <span className="invalid">email is invalid</span>:null}</td>
                            </tr>
                            <tr>
                                <td><input type="submit" name="" id="" /></td>
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
        {console.log('rendering display')}
    </>
}