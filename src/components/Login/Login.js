import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Login.module.css';

const login = ( props ) => (
  <div className={classes.LoginBody}>
    <div className={classes.Login}>
      <h3>Welcome to</h3>
      <h3>The<strong>Matrix</strong></h3>
      <hr/>
      <Link to="/home">Log In</Link>
      <button className={classes.btnGreen}>USE GOOGLE ACCOUNT</button>

      <p className={classes.pGrey}>Please use your work email address so we can connect you with your team in TheMatrix.</p>
    </div>
  </div>
);

export default login;
