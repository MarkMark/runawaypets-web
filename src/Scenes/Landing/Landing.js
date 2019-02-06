import React, { Component } from 'react'

import Hero from './Components/Hero'
import Info from './Components/Info'
import Rating from './Components/Rating'
import Download from './Components/Download'

import { ratings } from './Config/Ratings'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section>
        <Hero />

        <Info />

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

        <Download />
      </section>
    )
  }
}

export default Landing
