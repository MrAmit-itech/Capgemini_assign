import "../css/MyStyle.css"
import {Link} from "react-router-dom"
export const NavBar=()=>{
    return<>
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/details">Details</Link>
        </div>
    </>
}