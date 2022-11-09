import {useContext} from "react"
import {userContext} from './App'
import NavBar from "./NavBar";

function Profile (){
    const user = useContext(userContext);

    console.log(user)
    return (
        <div>
            <NavBar/>
            <h1>Profile</h1>
            <p>{user.username}'s profile</p>
            <p>email: {user.email}</p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
        </div>
    )
}

export default Profile