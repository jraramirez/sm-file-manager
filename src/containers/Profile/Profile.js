import React, { Component } from 'react';

import Base from '../Base/Base';
import ProfileCover from '../../components/Layout/ProfileCover/ProfileCover';
import Biography from '../../components/Layout/Biography/Biography';
import ContactInfo from '../../components/Layout/ContactInfo/ContactInfo';
import Groups from '../../components/Layout/Groups/Groups';

import classes from './Profile.module.css';

class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      firstName: 'Elizabet',
      show: false,
      cntNumber: '+80 1234 567 8901',
      email: 'elizabeth@email.com',
      offAdd: 'San Francisco Bay Area'
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render () {
    return (
      <div className={classes.Home}>
        <Base
          firstName={this.state.firstName} >
          <ProfileCover
            clickedClose={this.handleClose}
            clickedShow={this.handleShow}
            showStat={this.state.show}/>
          <Biography />
          <ContactInfo
            cntNumber={this.state.cntNumber}
            email={this.state.email}
            offAdd={this.state.offAdd} />
          <Groups />
        </Base>
      </div>
    );
  }
}

export default Profile;
