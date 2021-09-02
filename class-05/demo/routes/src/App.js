import React from 'react';
import Header from './components/Header';

import Home from './Screens/Home';
import AboutMe from './Screens/AboutMe';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/">
              {/* when the url changes, the switch route will render whatever component is being wrapped within the Route based on the URL */}
              <Home />
            </Route>
            <Route exact path="/about-me">
              <AboutMe />
            </Route>
          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;
