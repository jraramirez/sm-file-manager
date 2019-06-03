import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';

import Login from './components/Login/Login';
import Home from './containers/Home/Home';
import DocumentRepository from './containers/DocumentRepository/DocumentRepository';
import Profile from './containers/Profile/Profile';
import Messages from './containers/Messages/Messages';
import Settings from './containers/Settings/Settings';

class App extends Component {
  render() {
    return (
      <Switch>
        <div className={classes.App}>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/document-repository" exact component={DocumentRepository} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/messages" exact component={Messages} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/settings/login-and-security" exact component={Settings} />
          <Route path="/settings/site-preferences" exact component={Settings} />
        </div>
      </Switch>
    );
  }
}

export default App;
