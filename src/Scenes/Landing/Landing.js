import React, {Component} from 'react';

import Hero from './Components/Hero';

class Landing extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <section>
        <Hero />
      </section>
    );
  }
}

export default Landing;
