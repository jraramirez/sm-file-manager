import React, { Component } from 'react';

import Base from '../../components/Layout/Base/Base';
import UploadBar from '../../components/Layout/UploadBar/UploadBar';
import Carousel from '../../components/Layout/Carousel/Carousel';
import LatestNews from '../../components/Layout/LatestNews/LatestNews';
import LatestFiles from '../../components/Layout/LatestFiles/LatestFiles';

import classes from './Home.module.css';

class Home extends Component {
  render () {
    return (
      <div className={classes.Home}>
        <Base>
          <UploadBar />
          <Carousel />
          <LatestNews />
          <LatestFiles />
        </Base>
      </div>
    );
  }
}

export default Home;
