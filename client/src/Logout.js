import Button from 'react-bootstrap/Button';

function Logout ({handleLogout}){

    function handleOnClick(){
        fetch("/logout", {method: "DELETE"})
        .then((r)=> {
            sessionStorage.removeItem("login_status")
            handleLogout()
            alert("Logout successful!")
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