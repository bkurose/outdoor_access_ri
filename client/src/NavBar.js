import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import { useState } from "react"
import {useContext} from "react"
import {userContext} from './App'

function NavBar ({handleUser}){
    const loginStorage = sessionStorage.getItem("login_status")
    const [loginStatus, setLoginStatus] = useState(loginStorage)

    const [user] = useContext(userContext);
    

    function handleLogin(){
        setLoginStatus(true)
    }

    function handleLogout(){
        setLoginStatus(false)
    }
    return (
        <div id="NavBar">
            <Link className="Link" to="/map_overview">Overview</Link>

            {loginStatus ? <Link className="Link" to="/new_access">New Access</Link> : null}

            <Link className="Link" to="/access_rights">Legal Rights</Link>

            <Link to="/"><img id="nav_logo" src={require("./OARI_logo.png")} alt="Logo" /></Link>

            {loginStatus ? <><Logout handleLogout={handleLogout}/><p id='login-welcome'>welcome, <Link className="profileLink" to="/profile"> {user.first_name}</Link> </p></> : <><Login handleUser={handleUser} handleLogin={handleLogin}/> <Signup handleLogin={handleLogin}/></>}

        </div>
    )
}

export default NavBar