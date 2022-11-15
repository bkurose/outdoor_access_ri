import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function RatingsBar({ user, access }) {
  const [rating, setRating] = useState(0)
  const [show, setShow] = useState(true)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    setShow(false)
    fetch("/water_access_ratings", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        water_access_point_id: access.id,
        rating: rate,
      })})
    .then(res => res.json())
    .then(rating => console.log(rating))
  

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)

  return (
    <>
    {show ? <div className='App'>
      <Rating
        style={{"margin-top": "-20px"}}
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div> : <p>Thank you for submitting a rating!</p>}
    </>
  )
}

export default RatingsBar