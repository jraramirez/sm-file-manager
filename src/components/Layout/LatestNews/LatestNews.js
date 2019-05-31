import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import thumbImg1 from '../../../assets/images/thumb1.png';
import thumbImg2 from '../../../assets/images/thumb2.png';
import thumbImg3 from '../../../assets/images/thumb3.png';

import classes from './LatestNews.module.css';

const latestNews = (props) => (
  <div className={classes.LatestNews}>
    <div className={classes.HeaderTitle}>
      <h3>Latest News</h3>
    </div>
    <Row className={classes.LatestThumb}>
      <Link className={classes.ThumbLink} to="/">
        <Col className={classes.ImgThumb} md={3}>
          <div>
            <img alt="thumb1" src={thumbImg1} />
          </div>
        </Col>
        <Col md={9}>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <Link to="/">Mootral blog</Link>
        </Col>
      </Link>
      <div className={classes.Divider}>
      </div>

      <Link className={classes.ThumbLink} to="/">
        <Col className={classes.ImgThumb} md={3}>
          <div>
            <img alt="thumb2" src={thumbImg2} />
          </div>
        </Col>
        <Col md={9}>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <Link to="/">Mootral blog</Link>
        </Col>
      </Link>
      <div className={classes.Divider}>
      </div>

      <Link className={classes.ThumbLink} to="/">
        <Col className={classes.ImgThumb} md={3}>
          <div>
            <img alt="thumb3" src={thumbImg3} />
          </div>
        </Col>
        <Col md={9}>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <Link to="/">Mootral blog</Link>
        </Col>
      </Link>

      <button className={classes.btnGreen}>See more</button>
    </Row>
  </div>
);

export default latestNews;
