import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import classes from './SettingsLayout.module.scss';

import editIcon from '../../../assets/images/icons/ic_edit_24px.png';

import EmailAddress from './SettingsForms/EmailAddress';

class SettingsLayout extends Component {

  constructor(props){
    super(props);
    this.state = {showEmailAddressEdit:false};
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const {showEmailAddressEdit} = this.state;
    this.setState({showEmailAddressEdit:!showEmailAddressEdit})
  }

  render () {
    return (
      <div className={classes.SettingsLayout}>
        <Row>
          <Col className={classes.SettingsNav} md={2}>
            <ul className={classes.SettingsNavItems}>
              <li className={classes.SettingsNavLink}><NavLink to="/settings/" activeClassName="ActiveLink">Login and security</NavLink></li>
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
                { this.state.showEmailAddressEdit && <EmailAddress /> }
                <img onClick={ this.toggleDiv } src={editIcon} alt="Edit" />
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
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SettingsLayout;
