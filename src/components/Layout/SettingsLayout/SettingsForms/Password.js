import React from 'react';
import { Row, Col } from 'react-bootstrap';

import classes from '../../SettingsLayout/SettingsLayout.module.scss';

const Password = (props) => (
  <div className={classes.SettingsEdit}>
    <Row>
      <Col md={6}>
        <div className={classes.SettingsInstruction}>
          Change your password
        </div>
        <div className={classes.SettingsForm}>
          <form>
            <input type="password" name="Password" />
          </form>
        </div>
        <div className={classes.SettingsButtons}>
          <button className={classes.SendButton}>Send Verification</button>
          <button className={classes.CancelButton}>Cancel</button>
        </div>
      </Col>
    </Row>
  </div>
);

export default Password;
