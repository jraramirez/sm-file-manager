import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Base from '../Base/Base';
import SettingsLayout from '../../components/Layout/SettingsLayout/SettingsLayout';

class Settings extends Component {
  render () {
    return (
      <div>
        <Base>
          <SettingsLayout />
        </Base>
      </div>
    );
  }
}

export default Settings;
