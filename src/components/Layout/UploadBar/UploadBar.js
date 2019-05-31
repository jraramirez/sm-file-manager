import React from 'react';
import { Row, Col } from 'react-bootstrap';

import classes from './UploadBar.module.css';

const uploadBar = (props) => (
  <div className={classes.UploadBar}>
    <Row>
      <Col md={12}>
        <form>
          <input className={classes.UploadInput} type="text" name="Search" placeholder="Start a post or upload file..." />
        </form>
      </Col>
    </Row>
  </div>
);

export default uploadBar;
