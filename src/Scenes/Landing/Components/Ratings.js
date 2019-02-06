import React from 'react'
import { ratings } from '../Config/Ratings'
import Rating from './Rating'

export default function RatingSection() {
  return (
    <section className="u-color--white u-colorsBg--blue--light">
      <div className="o-wrapper u-padding-vertical-large">
        <div className="o-layout">
          <div className="col">
            <h1>What people are saying</h1>

            <div className="s-ratings">
              {ratings.map((object, i) => (
                <Rating
                  key={i}
                  stars={object.stars}
                  desc={object.desc}
                  person={object.person}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
