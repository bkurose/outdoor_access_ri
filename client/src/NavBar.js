import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import { useState } from "react"

function NavBar ({handleUser}){
    const loginStorage = sessionStorage.getItem("login_status")
    const [loginStatus, setLoginStatus] = useState(loginStorage)

    function handleLogin(){
        setLoginStatus(true)
    }

    function handleLogout(){
        setLoginStatus(false)
    }
    return (
        <div id="NavBar">
            <Link className="Link" to="/map_overview">Overview</Link>

            <Link className="Link" to="/new_access">New Access</Link>

            <Link className="Link" to="/access_rights">Legal Rights</Link>

            <Link to="/"><img id="nav_logo" src={require("./OARI_logo.png")} alt="Logo" /></Link>

            {loginStatus ? <><Logout handleLogout={handleLogout}/><p id='login-welcome'>Welcome,</p></> : <><Login handleUser={handleUser} handleLogin={handleLogin}/> <Signup handleLogin={handleLogin}/></>}

        </div>
    )
}

export default NavBar