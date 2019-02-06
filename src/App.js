import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ScrollTop from './Services/Config/ScrollTop'
import Landing from './Scenes/Landing/Landing'
import Privacy from './Scenes/Legal/Privacy/Privacy'
import Terms from './Scenes/Legal/Terms/Terms'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <ScrollTop>
        <main>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/legal/privacy" component={Privacy} />
            <Route exact path="/legal/terms" component={Terms} />
          </Switch>
        </main>

        <Footer />
      </ScrollTop>
    )
  }
}

export default App
