import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useState } from "react"

function NavBar (){
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
            <Link className="Link" to="/search">Search</Link>

            <Link className="Link" to="/new_access">New Access</Link>

            <Link className="Link" to="/profile">Profile</Link>

            <img id="nav_logo" src="https://o.remove.bg/downloads/fdfcf0c3-c096-42bc-83c9-28a938dcfab6/OARI_logo-removebg-preview.png" alt="Logo" />

            {loginStatus ? <Logout handleLogout={handleLogout}/> : <Login handleLogin={handleLogin}/>}

        </div>
    )
}

export default NavBar