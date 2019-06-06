import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Navigations.scss';
import classes from './Navigations.module.scss';

const navigations = (props) => (
  <div className={classes.Navigations}>
    <Row>
      <Col md={7} className={classes.NavCol}>
        <ul className={classes.NavigationItems}>
          <li><NavLink className={classes.Navfirstli} activeClassName="ActiveLink" to="/home">Home<div className="NavAct"></div></NavLink></li>
          <li><NavLink to="/">News<div className="NavAct"></div></NavLink></li>
          <li><NavLink to="/document-repository">Document Repository<div className="NavAct"></div></NavLink></li>
        </ul>
      </Col>
      <Col md={5} className={classes.SearchCol}>
        <form>
          <input className={classes.Search} type="text" name="Search" placeholder="Search" />
        </form>
      </Col>
    </Row>

  </div>
);

export default navigations;
