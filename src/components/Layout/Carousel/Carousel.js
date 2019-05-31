import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

import carouselImg from '../../../assets/images/carousel.png';

import classes from './Carousel.module.css';

const carousel = (props) => (
  <div className={classes.UploadBar}>
    <Row>
      <Col md={12}>
      <Carousel className={classes.CarouselBody}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg}
            alt="Third slide"
          />
        </Carousel.Item>
        </Carousel>
        <div className={classes.CarouselFooter}>
          <h4>Putting a Price Tag on Carbon Emissions</h4>
          <div className={classes.subBtn}>
            <p>Carbon Pricing Made Simple</p>

            <button className={classes.btnGreen}>Read more</button>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default carousel;
