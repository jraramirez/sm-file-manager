import React from 'react';
import { Row, Col } from 'react-bootstrap';

import classes from './ContactInfo.module.scss';

const contactInfo = (props) => (
  <div className={classes.ContactInfo}>
    <Row>
      <Col md={12}>
        <div className={classes.ContactContent}>
          <h3>Contact Info</h3>
          <p>Contact number</p>
          <p className={classes.BlackInfo}>{props.cntNumber}</p>

          <p>Email address</p>
          <p className={classes.BlackInfo}>{props.email}</p>

          <p>Office address</p>
          <p className={classes.BlackInfo}>{props.offAdd}</p>
        </div>
      </Col>
    </Row>
  </div>
);

export default contactInfo;
