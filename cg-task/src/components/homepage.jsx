import { Login } from "./login"
import { Details } from "./details"

export const Homepage=()=>{
    return<>
        <div className="comp">
            <Login/>,
            {/* <Details/>       */}
        </div>
    </>
}