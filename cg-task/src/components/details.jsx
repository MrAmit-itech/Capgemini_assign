import {  useState } from "react"

export const Details=()=>{
    const [data,setData] = useState({})


    const HandleSubmit=(event)=>{
        event.preventDefault()
        console.log('HandleSumit is triggered',data)
    }

    
    const HandleGender=(event)=>{
        console.log('value',event.target.value)   

        const {name,value} = event.target
        setData({
            ...data,
            [name]:value
        }) 
    }

    const HandleHobby=(event)=>{
        const{ name,value } = event.target
        
        setData({
            ...data,
            [name]:value
        })
    }

    return<>
        <div>
            <h2>Personal details</h2>
        </div>
        <div>
            <form onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Details</legend>
                    <table>
                        <tbody>
                            <tr>
                                <th>Select Gender</th>
                            </tr>
                            <tr>
                                <td><input type="radio" onChange={HandleGender} name="gender" id="female"  value="F"/></td>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <td><input type="radio" onChange={HandleGender} name="gender" id="male" value="M"/></td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th>Select Hobbies</th>
                            </tr>
                            <tr>
                                <td><input type="checkbox" onChange={HandleHobby} name="hobby1" id="" value={"Listening Music"}/></td>
                                <td>Listening Music</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" onChange={HandleHobby} name="hobby2" id="" value={"Dancing"}/></td>
                                <td>Dancing</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" onChange={HandleHobby} name="hobby3" id="" value={"Singing"} /></td>
                                <td>Singing</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" onChange={HandleHobby} name="hobby4" id="" value={"Travelling"} /></td>
                                <td>Travelling</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" onChange={HandleHobby} name="hobby5" id="" value={"Cooking"} /></td>
                                <td>Cooking</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" name="" id="" />
                                </td>
                            </tr>

                            
                        </tbody>
                    </table>
                </fieldset>
            </form>
        </div>  
          
    </>
}