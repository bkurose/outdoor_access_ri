import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

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
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="first_name"
                placeholder="Johnny"
                autoFocus
                name="first_name"
                value={userData.first_name}
                onChange={handleOnChange}
              />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="last_name">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="last_name"
                placeholder="Shore"
                autoFocus
                name="last_name"
                value={userData.last_name}
                onChange={handleOnChange}
              />
            </Form.Group> 
          <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="username"
                placeholder="JohnnyShore221"
                autoFocus
                value={userData.username}
                name="username"
                onChange={handleOnChange}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="your_email@example.com"
                autoFocus
                name="email"
                value={userData.email}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                autoFocus
                name="password"
                value={userData.password}
                placeholder="password"
                onChange={handleOnChange}
              />
            </Form.Group>  
            <Form.Group className="mb-3" controlId="confirm-password">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                autoFocus
                placeholder="password confirmation"
                value={userData.password_confirmation}
                name="password_confirmation"
                onChange={handleOnChange}
              />
            <p>I agree to the Terms and Conditions</p>
            </Form.Group> 
            <Button onClick={handleClose} variant="primary" type="submit" >
            Register
            </Button>
          </Form>
          
        </Modal.Body>
      </Modal>
    </>
    )
}

export default Signup