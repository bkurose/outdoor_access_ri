import React, { useState } from 'react';
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
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (event) => {
    const name = event.target.name
    let value = event.target.value

    setUserData({...userData, [name]: value})
  }

  function handleSubmit(e){
    const form = e.currentTarget;

    if (userData.password !== userData.password_confirmation){
      alert("Password and Password Confirmation do not match!")
    }
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      alert("Please fill out the registration form properly" )
      setValidated(true)
    }
    else{
    e.preventDefault()
    setValidated(true)
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
  }

  return (
    <> 
      <Button variant="auth" onClick={() => handleShow()}>
        Register ⚓
      </Button>
  
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form  noValidate validated={validated} onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="first_name">
            <Form.Control
              type="text"
              placeholder="First Name"
              autoFocus
              name="first_name"
              value={userData.first_name}
              onChange={handleOnChange}
              required
              minLength="1"
              maxLength="64"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a first name.
            </Form.Control.Feedback>
          </Form.Group> 
          <Form.Group className="mb-3" controlId="last_name">
            <Form.Control
              type="text"
              placeholder="Last Name"
              autoFocus
              name="last_name"
              value={userData.last_name}
              onChange={handleOnChange}
              required
              minLength="1"
              maxLength="64"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a last name.
            </Form.Control.Feedback>
          </Form.Group> 
        <Form.Group className="mb-3" controlId="username">
            <Form.Control
              type="text"
              placeholder="Desired Username"
              autoFocus
              value={userData.username}
              name="username"
              onChange={handleOnChange}
              required
              minLength="6"
              maxLength="32"
            />
            <Form.Control.Feedback type="invalid">
              Please enter unique username, 6-32 characters
            </Form.Control.Feedback>
          </Form.Group>            
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              placeholder="Email Address"
              autoFocus
              name="email"
              value={userData.email}
              onChange={handleOnChange}
              required
              minLength="6"
              maxLength="128"
            />
            <Form.Control.Feedback type="invalid">
              Please enter an email address
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              type="password"
              autoFocus
              name="password"
              value={userData.password}
              placeholder="Password"
              onChange={handleOnChange}
              required
              minLength="8"
              maxLength="32"
              pattern="(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
            />
            <Form.Control.Feedback type="invalid">
              Enter valid password: 8-32 characters, upper/lowercase, number, and symbol
            </Form.Control.Feedback>
          </Form.Group>  
          <Form.Group className="mb-3" controlId="confirm-password">
            <Form.Control
              type="password"
              autoFocus
              placeholder="Password Confirmation"
              value={userData.password_confirmation}
              name="password_confirmation"
              onChange={handleOnChange}
              required
              minLength="8"
              maxLength="32"
              pattern="(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
            />
            <Form.Control.Feedback type="invalid">
              Please re-enter your desired password
            </Form.Control.Feedback>
          </Form.Group> 
              <Form.Check feedbackType="invalid" feedback="You must agree to the Terms and Conditions to register" required type='checkbox' label={<p>Agree to the <Link to="/legal" target="_blank" rel="noopener noreferrer">Terms and Conditions</Link></p>} />
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


