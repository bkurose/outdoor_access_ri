import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function RatingsBar() {
  const [rating, setRating] = useState(0)
  const [show, setShow] = useState(true)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    setShow(false)

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
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div> : <h2>Thank you for submitting a rating!</h2>}
    </>
  )
}

export default RatingsBar