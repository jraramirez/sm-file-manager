import React from 'react';
import { Row, Col } from 'react-bootstrap';

import imgStaff from '../../../assets/images/paris.jpg';
import claimsIcon from '../../../assets/images/icons/claims-icon.svg';
import clarizenIcon from '../../../assets/images/icons/clarizen-icon.svg';
import gdriveIcon from '../../../assets/images/icons/gdrive-icon.svg';
import gmailIcon from '../../../assets/images/icons/gmail-icon.svg';
import harmonyIcon from '../../../assets/images/icons/harmony-icon.svg';
import smartsheetIcon from '../../../assets/images/icons/smartsheet-icon.svg';
import successfactorsIcon from '../../../assets/images/icons/successfactors-icon.svg';
import zalutravelIcon from '../../../assets/images/icons/zalutravel-icon.svg';
import calendarIcon from '../../../assets/images/icons/calendar-icon.svg';
import salesforceIcon from '../../../assets/images/icons/salesforce-icon.svg';
import boxIcon from '../../../assets/images/icons/box-icon.svg';
import lucidchart from '../../../assets/images/icons/lucidchart-icon.svg';

import classes from './SidebarRight.module.scss';

import { Link } from 'react-router-dom';

const sidebarRight = (props) => (
  <div className={classes.SidebarRight}>
    <div className={classes.SidebarContent}>
      <div className={classes.ImportantCom}>
        <div className={classes.Header}>
          <h4>Important communication</h4>
        </div>

        <div className={classes.ImpBody}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <Link to="/">Read more</Link> </p>
        </div>
      </div>

      <div className={classes.OurComp}>
        <h3>Our apps</h3>
        <div className={classes.OurApps}>
          <Row className={classes.Row}>
            <Col md={3}>
              <Link to="/"><img src={gmailIcon} alt="gmail" /></Link>
              <p>Mail</p>
            </Col>
            <Col md={3}>
              <Link to="/"><img src={gdriveIcon} alt="gdrive" /></Link>
              <p>Drive</p>
            </Col>
            <Col md={3}>
              <Link to="/"><img src={calendarIcon} alt="calendar" /></Link>
              <p>Calendar</p>
            </Col>
            <Col md={3}>
              <Link to="/"><img src={claimsIcon} alt="claims" /></Link>
              <p>ZaluClaims</p>
            </Col>
          </Row>

          <Row className={classes.Row}>
            <Col md={3}>
              <Link to="/"><img src={salesforceIcon} alt="salesforce" /></Link>
              <p>Salesforce</p>
            </Col>
            <Col md={3}>
              <Link to="/"><img src={boxIcon} alt="box" /></Link>
              <p>Box</p>
            </Col>
            <Col md={3}>
              <Link to="/"><img src={lucidchart} alt="lucidchart" /></Link>
              <p>LucidChart</p>
            </Col>
            <Col md={3}>
              <Link to="/"><img src={harmonyIcon} alt="harmony" /></Link>
              <p>HaRmony</p>
            </Col>
          </Row>

          <Row className={classes.Row}>
            <Col md={3}>
              <Link to="/"><img src={successfactorsIcon} alt="successfactors" /></Link>
              <p>Success Factors</p>
            </Col>
            <Col md={3}>
              <Link to="/"><img src={clarizenIcon} alt="clarizen" /></Link>
              <p>Clarizen</p>
            </Col>
            <Col md={3}>
              <Link to="/"><img src={zalutravelIcon} alt="zalutravel" /></Link>
              <p>ZaluTravel</p>
            </Col>
            <Col md={3}>
              <Link to="/"><img src={smartsheetIcon} alt="smartsheet" /></Link>
              <p>Smartsheet</p>
            </Col>
          </Row>
        </div>
      </div>

      <div className={classes.OurVission}>
        <h3>Our vision</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat. <Link to="/">Read more</Link></p>
      </div>

      <div className={classes.OurStaff}>
        <h3>Our staff</h3>
        <div className={classes.StaffImg}>
          <Row className={classes.RowStaff}>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2}className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
          </Row>

          <Row className={classes.RowStaff}>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2}className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
          </Row>

          <Row className={classes.RowStaff}>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2}className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
            <Col md={2} className={classes.ColStaff}>
              <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
);

export default sidebarRight;
