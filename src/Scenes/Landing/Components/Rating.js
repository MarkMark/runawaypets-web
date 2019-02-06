import React from 'react'

export default function Rating({ stars, desc, person }) {
  return (
    <div className="m-rating">
      <div>{stars}</div>
      <p>{desc}</p>
      <p className="m-rating__by">{person}</p>
    </div>
  )
}
