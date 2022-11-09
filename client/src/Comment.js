import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useContext, useEffect, useState} from "react"
import {userContext} from './App'
import Form from 'react-bootstrap/Form';




function Comment ({comment, commentUsers}){
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [commentUpdate, setCommentUpdate] = useState({
    "comment": "",
    "comment_title": ""
  })

  const currentUser = useContext(userContext);

  const commentUser = commentUsers.filter((user) => user.id === comment.user_id)

  function handleCloseUpdate(){
    setShowUpdateForm(false)
  }

  function handleOpenUpdate(){
    setShowUpdateForm(true)
  }

  const handleOnChange = (event) => {
    const name = event.target.name
    let value = event.target.value

    setCommentUpdate({...commentUpdate, [name]: value})
  }
  
  function handleCommentUpdate(e){
    e.preventDefault()
    fetch(`/water_access_comments/${comment.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json" 
      },
      body: JSON.stringify(commentUpdate)
    })
    .then(res => res.json())
    .then(res=> handleCloseUpdate())
  }

  function handleCommentDelete (){
    fetch(`/water_access_comments/${comment.id}` , {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  console.log(commentUser)

    return (
        <Card>
          <Card.Header>Comment by: {commentUser.length ? <>{commentUser[0].username}</> : null} </Card.Header>  
          <Card.Body>
            <Card.Title>{comment.comment_title}</Card.Title>
            <Card.Text>
              {comment.comment}
            </Card.Text>
            {comment.user_id === currentUser.id ? <Button onClick={handleCommentDelete} variant="primary">Delete</Button> : null}
            {comment.user_id === currentUser.id ? <Button onClick={handleOpenUpdate} variant="primary">Update</Button> : null}
            { showUpdateForm ? <Form onSubmit={handleCommentUpdate}>
                        <Button onClick={handleCloseUpdate} style={{"float": "right"}}>X</Button>
                        <Form.Group className="mb-3" controlId="newCommentTitle">
                            <Form.Control onChange={handleOnChange} value={commentUpdate.comment_title} name="comment_title" type="text" placeholder="Updated Title?" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="newComment">
                            <Form.Control onChange={handleOnChange} value={commentUpdate.comment} name="comment" type="text" placeholder="Updated Comment...?" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form> : null }

          </Card.Body>
        </Card>
      );
}

export default Comment