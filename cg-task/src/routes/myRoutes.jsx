import {Routes,Route} from "react-router-dom"
import { Details } from "../components/details"
import { HomePage } from "../components/homePage"
import { Login } from "../components/login"
import { NavBar } from "../components/navbar"

export const MyRoutes=()=>{
    return<>
        <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/details' element={<Details/>} />
        </Routes>
    </>
}