import React from 'react';
import { Row, Col } from 'react-bootstrap';

import classes from '../../SettingsLayout/SettingsLayout.module.scss';

const EmailAddress = (props) => (
  <div className={classes.SettingsEdit}>
    <Row>
      <Col md={6}>
        <div className={classes.SettingsInstruction}>
          Change your email address
        </div>
        <div className={classes.SettingsForm}>
          <form>
            <input type="text" name="EmailAddress" />
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

export default EmailAddress;
