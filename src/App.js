import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './App.module.css';

import Login from './components/Login/Login';
import Home from './containers/Home/Home';
import News from './containers/News/News';
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
          <Route path="/news" exact component={News} />
          <Route path="/document-repository" exact component={DocumentRepository} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/messages" exact component={Messages} />
          <Route path="/settings" exact component={Settings} />
        </div>
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
