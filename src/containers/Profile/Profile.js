import React, { Component } from 'react';

import Base from '../Base/Base';
import ProfileCover from '../../components/Layout/ProfileCover/ProfileCover';
import Biography from '../../components/Layout/Biography/Biography';
import ContactInfo from '../../components/Layout/ContactInfo/ContactInfo';
import Groups from '../../components/Layout/Groups/Groups';

import classes from './Profile.module.css';

class Profile extends Component {
  state = {
    firstName: 'Elizabet',
    cntNumber: '+80 1234 567 8901',
    email: 'elizabeth@email.com',
    offAdd: 'San Francisco Bay Area'
  }

  render () {
    return (
      <div className={classes.Home}>
        <Base
          firstName={this.state.firstName} >
          <ProfileCover />
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
