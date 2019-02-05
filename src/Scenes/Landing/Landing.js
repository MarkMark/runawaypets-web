import React, {Component} from 'react';

import Hero from './Components/Hero';
import Info from './Components/Info';
import Rating from './Components/Rating';

import {ratings} from './Config/Ratings';

class Landing extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <section>
        <Hero />

        <Info />

        <section className="o-wrapper">
          <h1>What people are saying</h1>

          <div className="s-ratings">
            {ratings.map ((object, i) => (
              <Rating
                key={i}
                stars={object.stars}
                desc={object.desc}
                person={object.person}
              />
            ))}
          </div>
        </section>

      </section>
    );
  }
}

export default Landing;
