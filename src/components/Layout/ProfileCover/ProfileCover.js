import React from 'react';
import { Row, Col } from 'react-bootstrap';

import profileImage from '../../../assets/images/paris.jpg';
import profileCoverImg from '../../../assets/images/HERO_IMAGE.png';
import classes from './ProfileCover.module.scss';

const profCoverImg = {
  backgroundImage: 'url(' + profileCoverImg + ')'
};

const profImg = {
  backgroundImage: 'url(' + profileImage + ')'
};

const profileCover = (props) => (
  <div className={classes.ProfCov}>
    <Row>
      <Col md={12}>
        <div className={classes.CoverWrapper} style={profCoverImg}>
          <div className={classes.Content}>
            <div className={classes.CoverInfo}>
              <div className={classes.Prof} style={profImg}>
              </div>
              <div className={classes.NamePos}>
                <h4>John Doe</h4>
                <p>Project Manager</p>
              </div>

              <button className={classes.btnGreen}>Message</button>
            </div>
            <div className={classes.Blur}></div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default profileCover;
