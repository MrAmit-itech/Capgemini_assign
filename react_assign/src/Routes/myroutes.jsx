import {Routes,Route} from "react-router-dom"
import About from "../Components/about"
import Contact from "../Components/contact"
import Home from "../Components/home"
import Login from "../Components/login"
import Navbar from "../Components/navbar"
import SignUp from "../Components/signup"

const Myroutes=()=>{
    return<>
        <div><Navbar/></div>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/SignUp" element={<SignUp/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
        </div>
    </>
}
export default Myroutes