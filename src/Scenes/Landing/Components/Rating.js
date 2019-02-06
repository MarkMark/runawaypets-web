import React from 'react'

export default function Rating({ stars, desc, person }) {
  return (
    <div className="m-rating">
      <div>
        <div>
          <i className="a-icon-star-full" />
          <i className="a-icon-star-full" />
        </div>
        <div>
          <i className="a-icon-star-full" />
          <i className="a-icon-star-full" />
          <i className="a-icon-star-full" />
        </div>
      </div>
      <p>{desc}</p>
      <p className="m-rating__by">{person}</p>
    </div>
  )
}
