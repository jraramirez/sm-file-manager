import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import jpgImg from '../../../assets/images/JPG-lg.png';
import pdfImg from '../../../assets/images/PDF-lg.png';
import pptImg from '../../../assets/images/PPT-lg.png';

import classes from './LatestFiles.module.css';

const latestFiles = (props) => (
  <div className={classes.LatestFiles}>
    <div className={classes.HeaderTitle}>
      <h3>Latest files uploaded</h3>
    </div>
    <Row className={classes.LatestThumb}>
      <Link className={classes.ThumbLink} to="/">
        <Col className={classes.ImgThumb} md={3}>
          <div>
            <img alt="ppt" src={pptImg} />
          </div>
        </Col>
        <Col md={9}>
          <h5>Inqpharm presentation</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <span>Updated on 23 March by Kate</span>
        </Col>
      </Link>
      <div className={classes.Divider}>
      </div>

      <Link className={classes.ThumbLink} to="/">
        <Col className={classes.ImgThumb} md={3}>
          <div>
            <img alt="jpg" src={jpgImg} />
          </div>
        </Col>
        <Col md={9}>
          <h5>Neem office picture</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <span>Updated on 10 March by Stéphanie</span>
        </Col>
      </Link>
      <div className={classes.Divider}>
      </div>

      <Link className={classes.ThumbLink} to="/">
        <Col className={classes.ImgThumb} md={3}>
          <div>
            <img alt="pdf" src={pdfImg} />
          </div>
        </Col>
        <Col md={9}>
          <h5>Cow infographic</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <span>Updated on 25 February by Bora</span>
        </Col>
      </Link>

      <button className={classes.btnGreen}>See more</button>
    </Row>
  </div>
);

export default latestFiles;
