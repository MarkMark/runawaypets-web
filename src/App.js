import React, {Component} from 'react';
import Landing from './Scenes/Landing/Landing';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render () {
    return (
      <main>
        <Landing />
        <Footer />
      </main>
    );
  }
}

export default App;
