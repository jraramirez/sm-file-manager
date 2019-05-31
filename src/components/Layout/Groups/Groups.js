import React from 'react';
import { Row, Col } from 'react-bootstrap';

import thumbImg1 from '../../../assets/images/groupsthumb.png';
import classes from './Groups.module.scss';

const groups = (props) => (
  <div className={classes.Groups}>
    <Row>
      <Col md={12}>
        <div className={classes.GroupsContent}>
          <h3>Groups</h3>
          <Row>
            <Col className={classes.GroupsCol} md={3}>
              <img alt="thumb1" src={thumbImg1} />
              <p>Mootral Digital</p>
            </Col>
            <Col className={classes.GroupsCol} md={3}>
              <img alt="thumb1" src={thumbImg1} />
              <p>Carbon Market</p>
            </Col>
            <Col className={classes.GroupsCol} md={3}>
              <img alt="thumb1" src={thumbImg1} />
              <p>Sales & Marketing</p>
            </Col>
            <Col className={classes.GroupsCol} md={3}>
              <img alt="thumb1" src={thumbImg1} />
              <p>Excepteur sint occaecat</p>
            </Col>
            <Col className={classes.GroupsCol} md={3}>
              <img alt="thumb1" src={thumbImg1} />
              <p>Consequuntur magni</p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
);

export default groups;
