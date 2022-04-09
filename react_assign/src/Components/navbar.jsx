import {Link} from "react-router-dom"
import "../Css/Mystyle.css"

const Navbar=()=>{
    return<>
        <div id="nav_bar">
            <div>Pure feel</div>
            <div id="nav_link">
                <Link  className="linkstyle" to={"/"} >Home</Link>
                <Link  className="linkstyle" to={"/About"}>About</Link>
                <Link  className="linkstyle" to={"/Signup"}>Signup</Link>
                <Link  className="linkstyle" to={"/Login"}>Login</Link>
                <Link  className="linkstyle" to={"/Contact"}>Contact</Link>
                <Link  className="linkstyle" to={"/userdetails"}>Users</Link>
            </div>
        </div>
        
    </>
}
export default Navbar