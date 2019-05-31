import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import classes from './SettingsLayout.module.scss';

import msgIcon from '../../../assets/images/icons/msg.png';

const SettingsLayout = (props) => (
  <div className={classes.SettingsLayout}>
    <Row>
      <Col className={classes.SettingsNav} md={2}>
        <ul className={classes.SettingsNavItems}>
          <li className={classes.SettingsNavLink}><Link to="/settings/login-and-security">Login and security</Link></li>
          <li className={classes.SettingsNavLink}><Link to="/settings/site-preferences">Site preferences</Link></li>
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
            <img src={msgIcon} alt="Messaging" />
          </div>
          <div className={classes.SettingsOption}>
            <div className={classes.SettingsOptionName}>
              Email Address
            </div>  
            <div className={classes.SettingsOptionDescription}>
              Edit or remove email address on your account
            </div>
            <img src={msgIcon} alt="Messaging" />
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
            <img src={msgIcon} alt="Messaging" />
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default SettingsLayout;
