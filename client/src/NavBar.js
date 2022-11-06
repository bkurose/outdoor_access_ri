import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

function NavBar (){
    return (
        <div id="NavBar">
            <Link className="Link" to="/search">Search</Link>

            <Link className="Link" to="/new_access">New Access</Link>

            <Link className="Link" to="/profile">Profile</Link>

            <img id="nav_logo" src="https://o.remove.bg/downloads/fdfcf0c3-c096-42bc-83c9-28a938dcfab6/OARI_logo-removebg-preview.png" alt="Logo" />

            <Login />

            <Logout />
        </div>
    )
}

export default NavBar