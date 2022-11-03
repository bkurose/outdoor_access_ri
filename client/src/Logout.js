import Button from 'react-bootstrap/Button';

function Logout (){

    function handleLogout(){
        fetch("/logout", {method: "DELETE"})
        .then((r)=> {console.log("logged out")})
    }

    return (
        <>
            <Button variant="primary" onClick={handleLogout}>
                Logout
            </Button>
        </>
    )
}

export default Logout