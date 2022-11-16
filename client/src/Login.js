import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

function Login ({handleLogin}){
    const [ loginData, setLoginData ] = useState({username: "", password: ""})
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let navigate = useNavigate();

    const handleOnChange = (event) => {
        const name = event.target.name
        let value = event.target.value
  
        setLoginData({...loginData, [name]: value})
    }
  
    const handleOnSubmit = (e) => {
        e.preventDefault()
      
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then(r => {
                    sessionStorage.setItem("login_status", false)
                    sessionStorage.setItem("user_data", JSON.stringify(r))
                    handleLogin()
                    alert("Login Success!")
                    navigate(`/`)
                    window.location.reload()
                })
            }else{res.json().then(json => console.log(json.errors))} 
        })
    }
  
  
    return(
        <>
            <Button variant="auth" onClick={handleShow}>
                Login ⚓
            </Button>
  
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="username"
                                name="username"
                                placeholder="Username"
                                value={loginData.username}
                                onChange={handleOnChange}
                                autoFocus
                            />  
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={handleOnChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Button variant="form-submit" type='submit' onClick={handleClose}>
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
       
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Login