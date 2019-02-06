import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Scenes/Landing/Landing';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>

        <Footer />
      </main>
    );
  }
}

export default App;
