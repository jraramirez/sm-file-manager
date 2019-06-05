import React, { Component } from 'react';

import Base from '../Base/Base';
import UploadBar from '../../components/Layout/UploadBar/UploadBar';
import Carousel from '../../components/Layout/Carousel/Carousel';
import LatestNews from '../../components/Layout/LatestNews/LatestNews';
import LatestFiles from '../../components/Layout/LatestFiles/LatestFiles';

import classes from './Home.module.css';

class Home extends Component {
  state = {
    firstName: 'Elizabet',
    show: false
  }

  render () {
    return (
      <div className={classes.Home}>
        <Base
          firstName={this.state.firstName}>
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
