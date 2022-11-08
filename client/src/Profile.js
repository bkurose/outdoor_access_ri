import {useContext} from "react"
import {userContext} from './App'

function Profile (){
    const user = useContext(userContext);

    console.log(user)
    return (
        <div>
            <h1>Profile</h1>
            <p>{user.username}'s profile</p>
        </div>
    )
}

export default Profile