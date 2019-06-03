import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import classes from './SettingsLayout.module.scss';

import editIcon from '../../../assets/images/icons/ic_edit_24px.png';

const SettingsLayout = (props) => (
  <div className={classes.SettingsLayout}>
    <Row>
      <Col className={classes.SettingsNav} md={2}>
        <ul className={classes.SettingsNavItems}>
          <li className={classes.SettingsNavLink}><NavLink to="/settings/login-and-security" activeClassName="ActiveLink">Login and security</NavLink></li>
          <li className={classes.SettingsNavLink}><NavLink to="/settings/site-preferences">Site preferences</NavLink></li>
        </ul>
      </Col>
      <Col className={classes.SettingsExpanded} md={10}>
        <div className={classes.SettingsSection}>
          <h3 className={classes.SettingsHeader}>
              Login and security
          </h3>
          <div className={classes.SettingsOption}>
            <div className={classes.SettingsOptionName}>
              Email Address
            </div>  
            <div className={classes.SettingsOptionDescription}>
              Edit or remove email address on your account
            </div>
            <a href="#">
              <img src={editIcon} alt="Edit" />
            </a>
          </div>
          <div className={classes.SettingsOption}>
            <div className={classes.SettingsOptionName}>
              Phone number
            </div>  
            <div className={classes.SettingsOptionDescription}>
              Add a Phone number in case you have trouble signing in
            </div>
            <a href="#">
              <img src={editIcon} alt="Edit" />
            </a>
          </div>
          <div className={classes.SettingsOption}>
            <div className={classes.SettingsOptionName}>
              Change password
            </div>  
            <div className={classes.SettingsOptionDescription}>
              Choose unique password to protect your account
            </div>
            <a href="#">
              <img src={editIcon} alt="Edit" />
            </a>
          </div>
          <div className={classes.SettingsOption}>
            <div className={classes.SettingsOptionName}>
              Where you're signed in
            </div>  
            <div className={classes.SettingsOptionDescription}>
              See your active sessions, and isgn out if you'd like
            </div>
            <a href="#">
              <img src={editIcon} alt="Edit" />
            </a>
          </div>
        </div>
        <div className={classes.SettingsSection}>
          <h3 className={classes.SettingsHeader}>
              Site preferences
          </h3>
          <div className={classes.SettingsOption}>
            <div className={classes.SettingsOptionName}>
              Feed preference
            </div>  
            <div className={classes.SettingsOptionDescription}>
              Make your feed your own
            </div>
            <a href="#">
              <img src={editIcon} alt="Edit" />
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default SettingsLayout;
