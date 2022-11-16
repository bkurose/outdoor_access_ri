import {useContext} from "react"
import { appContext } from './App'
import NavBar from "./NavBar";

function Profile (){
    const { user } = useContext(appContext)
    const [userValue, setUserValue] = user;

    console.log(userValue)
    return (
        <div>
            <NavBar/>
            <h1>Profile</h1>
            <p>{userValue.username}'s profile</p>
            <p>email: {userValue.email}</p>
            <p>First Name: {userValue.first_name}</p>
            <p>Last Name: {userValue.last_name}</p>

        </div>
    )
}

export default Profile