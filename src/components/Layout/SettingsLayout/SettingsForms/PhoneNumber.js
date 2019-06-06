import React from 'react';
import { Row, Col } from 'react-bootstrap';

import classes from '../../SettingsLayout/SettingsLayout.module.scss';

const PhoneNumber = (props) => (
  <div className={classes.SettingsEdit}>
    <Row>
      <Col md={6}>
        <div className={classes.SettingsInstruction}>
          Change your phone number
        </div>
        <div className={classes.SettingsForm}>
          <form>
            <input type="text" name="PhoneNumber" />
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

export default PhoneNumber;
