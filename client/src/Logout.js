import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { appContext } from './App'

function Logout ({handleLogout}){
    const { user } = useContext(appContext)
    const [userValue, setUserValue] = user;

    let navigate = useNavigate();

    function handleOnClick(){
        fetch("/logout", {method: "DELETE"})
        .then((r)=> {
            sessionStorage.removeItem("login_status")
            sessionStorage.removeItem("user_data")
            handleLogout()
            setUserValue({})
            alert("Logout successful!")
            navigate(`/`)
        })
    }

    return (
        <>
            <Button variant="auth" onClick={handleOnClick}>
                Logout ⚓
            </Button>
        </>
    )
}

export default Logout