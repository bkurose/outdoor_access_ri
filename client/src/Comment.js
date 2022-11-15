import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from "react"
import { userContext } from './App'
import Form from 'react-bootstrap/Form';

function Comment ({ comment, commentUsers }){
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [commentUpdate, setCommentUpdate] = useState({
    "comment": "",
    "comment_title": ""
  })

  const [user] = useContext(userContext); //condition logic needed to display when not logged in

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
        <Card  style={{"border-radius": "30px", "padding": "10px", "margin-bottom": "20px"}}>
          <Card.Body style={{"background-color": "#009BFF", "color": "white", "font-size": "25px", "border-radius": "30px"}}>
            <Card.Title  style={{"font-size": "35px"}}><b>{comment.comment_title}</b></Card.Title>
            <Card.Text style={{"font-size": "25px"}}>
            Comment by: <b>{commentUser.length ? <>{commentUser[0].username}</> : null}</b> 
            </Card.Text>
            <Card.Text>
              {comment.comment}
            </Card.Text>{user ? 
            <>{comment.user_id === user.id ? <Button onClick={handleCommentDelete}  variant="rating">Delete</Button> : null}
            {comment.user_id === user.id ? <Button onClick={handleOpenUpdate}  variant="rating">Update</Button> : null}</> : null}
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