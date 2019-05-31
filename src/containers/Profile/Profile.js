import React, { Component } from 'react';

import Base from '../../components/Layout/Base/Base';
import ProfileCover from '../../components/Layout/ProfileCover/ProfileCover';
import Biography from '../../components/Layout/Biography/Biography';
import ContactInfo from '../../components/Layout/ContactInfo/ContactInfo';
import Groups from '../../components/Layout/Groups/Groups';

import classes from './Profile.module.css';

class Profile extends Component {
  render () {
    return (
      <div className={classes.Home}>
        <Base>
          <ProfileCover />
          <Biography />
          <ContactInfo />
          <Groups />
        </Base>
      </div>
    );
  }
}

export default Profile;
