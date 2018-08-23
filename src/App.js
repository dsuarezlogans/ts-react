import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Schedule from './components/Schedule';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import 'normalize.css';
import './assets/stylesheets/base.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute path="/" component={Home} layout={null} exact notLoggedInOnly/>
          <PublicRoute path="/login" component={LoginPage} notLoggedInOnly/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/schedule" component={Schedule}/>
          <PublicRoute component={NotFound} layout={null}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
