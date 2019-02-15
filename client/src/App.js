import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Admin from './containers/admin/Admin'
import Application from './containers/application/Application'
import Info from './containers/info/Info'
import LandingPage from './containers/landingpage/LandingPage'
import Navigation from './containers/navigation/Navigation'
import Path from './containers/path/Path'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" />
              <Route path="/admin" component={Admin} />
              <Route path="/application" component={Application} />
              <Route path="/info" component={Info} />
              <Route path="/landingpage" component={LandingPage} />
              <Route component={Path} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
