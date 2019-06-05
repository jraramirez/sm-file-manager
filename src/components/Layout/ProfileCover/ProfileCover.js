import React, { Component } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';

import modalHeroImg from '../../../assets/images/hero-modalimg.png';
import profileImage from '../../../assets/images/paris.jpg';
import profileCoverImg from '../../../assets/images/HERO_IMAGE.png';
import classes from './ProfileCover.module.scss';
import './ProfileCover.scss';

const profCoverImg = {
  backgroundImage: 'url(' + profileCoverImg + ')'
};

const profImg = {
  backgroundImage: 'url(' + profileImage + ')'
};

const modalHeroCover = {
  backgroundImage: 'url(' + modalHeroImg + ')'
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

              <button className={classes.btnGreen} onClick={props.clickedShow}>Edit Profile</button>
            </div>
            <div className={classes.Blur}></div>
          </div>
        </div>
      </Col>
    </Row>

    <Modal className={classes.ModalBox} show={props.showStat} onHide={props.clickedClose}>
      <Modal.Header closeButton>
        <Modal.Title className={classes.Title}>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.ModalBody}>
        <div className={classes.ModalCoverWrapper} style={modalHeroCover}>
        </div>
        <div className={classes.ProfWrapper}>
          <div className={classes.Prof} style={profImg}>
          </div>
        </div>
        <div className={classes.ModalForm}>
          <form>
            <Row>
              <Col md={6}>
                <p>First name *</p>
                <input type="text" name="fname"></input>
              </Col>
              <Col md={6}>
                <p>Last name *</p>
                <input type="text" name="lname"></input>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <p>Current position *</p>
                <input type="text" name="position"></input>
              </Col>
            </Row>
            <button className={classes.btnAddPos}>Add new position</button>

            <Row className={classes.cntRow}>
              <Col md={6}>
                <p>Contact number</p>
                <input type="text" name="contact"></input>
              </Col>
              <Col md={3}>
              <select className={classes.SelectMod}>
                <option value="Work">Work</option>
              </select>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <p>Office address</p>
                <input></input>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <p className={classes.LabelBio}>Biography</p>
                <textarea></textarea>
              </Col>
            </Row>

            <div className={classes.ProfModFooter}>
              <div className={classes.BtnWrapper}>
                <Button className={classes.CancelMod} variant="secondary" onClick={props.clickedClose}>
                  Cancel
                </Button>
                <Button className={classes.UpdateMod} variant="primary" onClick={props.clickedShow}>
                  Update
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  </div>
);

export default profileCover;
