import React from 'react';
import { Row, Col } from 'react-bootstrap';

import classes from './EmailAddress.module.scss';

const SettingsLayout = (props) => (
  <div className={classes.EmailAddress}>
    <Row>
      <Col md={6}>
        <div className={classes.EmailAddressInstruction}>
          Change your email address
        </div>
        <div className={classes.EmailAddressForm}>
          <form>
            <input type="text" name="EmailAddress" />
          </form>
        </div>
        <div className={classes.EmailAddressButtons}>
          <button className={classes.CancelButton}>Cancel</button>
          <button className={classes.SendButton}>Send</button>
        </div>
      </Col>
    </Row>
  </div>
);

export default SettingsLayout;
