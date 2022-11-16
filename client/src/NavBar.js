import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import { useState } from "react"
import { useContext } from "react"
import { appContext } from './App'

function NavBar ({handleUser}){
    const loginStorage = sessionStorage.getItem("login_status")
    const [loginStatus, setLoginStatus] = useState(loginStorage)

    const { user } = useContext(appContext)
    const [userValue, setUserValue] = user;
    

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

            {loginStatus ? <><Logout handleLogout={handleLogout}/><div id="navProfile"><p id='login-welcome'>welcome, </p><h2 className="profileLink"> {userValue.first_name}</h2><img id='profilePic' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="oops" /></div></> : <><Login handleUser={handleUser} handleLogin={handleLogin}/> <Signup handleLogin={handleLogin}/></>}

        </div>
    )
}

export default NavBar