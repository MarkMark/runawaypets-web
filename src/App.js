import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Scenes/Landing/Landing'
import Privacy from './Scenes/Legal/Privacy/Privacy'
import Terms from './Scenes/Legal/Terms/Terms'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/legal/privacy" component={Privacy} />
          <Route exact path="/legal/terms" component={Terms} />
        </Switch>

        <Footer />
      </main>
    )
  }
}

export default App
