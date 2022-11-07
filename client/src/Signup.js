import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

function Signup ({handleLogin}){
    const [ show, setShow ] = useState(false);
    const [ userData, setUserData ] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnChange = (event) => {
        const name = event.target.name
        let value = event.target.value
  
        setUserData({...userData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": userData.username,
                    "password": userData.password
                })
            })
            .then((res) => {
                if(res.ok) {
                    res.json().then(r => {
                        sessionStorage.setItem("login_status", false)
                        handleLogin()
                        alert("Login Success!")
                    })
                }else{res.json().then(json => console.log(json.errors))} 
            })
        })

    }
    return (
        <> 
            <Button variant="auth" onClick={handleShow}>
                Register ⚓
            </Button>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="first_name">
              <Form.Control
                type="first_name"
                placeholder="First Name"
                autoFocus
                name="first_name"
                value={userData.first_name}
                onChange={handleOnChange}
              />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="last_name">
              <Form.Control
                type="last_name"
                placeholder="Last Name"
                autoFocus
                name="last_name"
                value={userData.last_name}
                onChange={handleOnChange}
              />
            </Form.Group> 
          <Form.Group className="mb-3" controlId="username">
              <Form.Control
                type="username"
                placeholder="Desired Username"
                autoFocus
                value={userData.username}
                name="username"
                onChange={handleOnChange}
              />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Email Address"
                autoFocus
                name="email"
                value={userData.email}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                autoFocus
                name="password"
                value={userData.password}
                placeholder="Password"
                onChange={handleOnChange}
              />
            </Form.Group>  
            <Form.Group className="mb-3" controlId="confirm-password">
              <Form.Control
                type="password"
                autoFocus
                placeholder="Password Confirmation"
                value={userData.password_confirmation}
                name="password_confirmation"
                onChange={handleOnChange}
              />

            </Form.Group> 
                <Form.Check type='checkbox' label={<p>Agree to the <Link to="/legal" target="_blank" rel="noopener noreferrer">Terms and Conditions</Link></p>} />
            <Button onClick={handleClose} variant="form-submit" type="submit" >
            Register
            </Button>
          </Form>
          
        </Modal.Body>
      </Modal>
    </>
    )
}

export default Signup