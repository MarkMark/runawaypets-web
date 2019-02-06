import React, { Component } from 'react'

import Hero from './Components/Hero'
import Info from './Components/Info'
import Ratings from './Components/Ratings'
import Download from './Components/Download'

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
        <Ratings />
        <Download />
      </section>
    )
  }
}

export default Landing
