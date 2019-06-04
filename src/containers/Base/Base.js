import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SidebarLeft from '../../components/Layout/SidebarLeft/SidebarLeft';
import SidebarRight from '../../components/Layout/SidebarRight/SidebarRight';
import Navigations from '../../components/Layout/Navigations/Navigations';

import classes from './Base.module.css'

const base = (props) => (
  <div className={classes.Base}>
    <Row className={classes.Row}>
      <Col className={classes.ColLeft} md={2}>
        <SidebarLeft
          firstName={props.firstName} />
      </Col>
      <Col md={8} className={classes.ColMain}>
      <Navigations />
      {props.children}
      </Col>
      <Col className={classes.ColRight} md={2}>
        <SidebarRight />
      </Col>
    </Row>
  </div>
);

export default base;
