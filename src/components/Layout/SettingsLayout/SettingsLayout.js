import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import classes from './SettingsLayout.module.scss';

import editIcon from '../../../assets/images/icons/ic_edit_24px.png';

import EmailAddress from './SettingsForms/EmailAddress';
import PhoneNumber from './SettingsForms/PhoneNumber';
import Password from './SettingsForms/Password';

class SettingsLayout extends Component {

  constructor(props){
    super(props);
    this.state = {showEmailAddressEdit:false};
    this.state = {showPhoneNumberEdit:false};
    this.state = {showPasswordEdit:false};
    this.toggleEmailAddressEdit = this.toggleEmailAddressEdit.bind(this);
    this.togglePhoneNumberEdit = this.togglePhoneNumberEdit.bind(this);
    this.togglePasswordEdit = this.togglePasswordEdit.bind(this);
  }

  toggleEmailAddressEdit = () => {
    const {showEmailAddressEdit} = this.state;
    this.setState({showEmailAddressEdit:!showEmailAddressEdit})
  }
  togglePhoneNumberEdit = () => {
    const {showPhoneNumberEdit} = this.state;
    this.setState({showPhoneNumberEdit:!showPhoneNumberEdit})
  }
  togglePasswordEdit = () => {
    const {showPasswordEdit} = this.state;
    this.setState({showPasswordEdit:!showPasswordEdit})
  }

  render () {
    return (
      <div className={classes.SettingsLayout}>
        <Row>
          <Col md={12}>
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
                <img onClick={ this.toggleEmailAddressEdit } src={editIcon} alt="Edit" />
                { this.state.showEmailAddressEdit && <EmailAddress /> }
              </div>
              <div className={classes.SettingsOption}>
                <div className={classes.SettingsOptionName}>
                  Phone number
                </div>  
                <div className={classes.SettingsOptionDescription}>
                  Add a Phone number in case you have trouble signing in
                </div>
                <img onClick={ this.togglePhoneNumberEdit } src={editIcon} alt="Edit" />
                { this.state.showPhoneNumberEdit && <PhoneNumber /> }
              </div>
              <div className={classes.SettingsOption}>
                <div className={classes.SettingsOptionName}>
                  Change password
                </div>  
                <div className={classes.SettingsOptionDescription}>
                  Choose unique password to protect your account
                </div>
                <img onClick={ this.togglePasswordEdit } src={editIcon} alt="Edit" />
                { this.state.showPasswordEdit && <Password /> }
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SettingsLayout;
