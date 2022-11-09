import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Logout ({handleLogout}){

    let navigate = useNavigate();

    function handleOnClick(){
        fetch("/logout", {method: "DELETE"})
        .then((r)=> {
            sessionStorage.removeItem("login_status")
            handleLogout()
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