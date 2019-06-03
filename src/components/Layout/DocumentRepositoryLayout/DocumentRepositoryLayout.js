import React from 'react';
import { Row, Col } from 'react-bootstrap';

import folderIcon from '../../../assets/images/icons/folder.png';
import optionIcon from '../../../assets/images/icons/Options.png';
import downArrowIcon from '../../../assets/images/icons/Down arrow small.png';

import classes from './DocumentRepositoryLayout.module.scss';

const DocumentRepositoryLayout = (props) => (
  <div className={classes.DocumentRepositoryLayout}>
    <div className={classes.Actions}>
      <button className={classes.NewAction}>
        New &nbsp; <img className={classes.ExpandButton} src={downArrowIcon} alt="Expand"/>
      </button>
    </div>
    <Row>
      <Col md={12}>
        <div className={classes.Folder}>
          <div className={classes.FolderHeader}>
            <h4 className={classes.FolderName}>
              Inqpharm
            </h4>
          </div>
          <div className={classes.SubFolder}>
          <Row>
            <Col md={1}>
              <img className={classes.FolderIcon} src={folderIcon} alt="Folder" />
            </Col>
            <Col md={11}>
              <h4 className={classes.SubFolderName}>
                Inqpharm presentation
              </h4>
              <div className={classes.SubFolderDetails}>
                <span className={classes.SubFolderUpdate}>
                  Updated on 23 March by Kate
                </span>
                <br/>
                <span className={classes.SubFolderSize}>
                  400.2 KB
                </span>
              </div>
              <a className={classes.SubFolderOptions} href="#">
                <img src={optionIcon} alt="Options" />
              </a>
            </Col>
          </Row>
          </div>
          <div className={classes.SubFolder}>
          <Row>
            <Col md={1}>
              <img className={classes.FolderIcon} src={folderIcon} alt="Folder" />
            </Col>
            <Col md={11}>
              <h4 className={classes.SubFolderName}>
                Inqpharm presentation
              </h4>
              <div className={classes.SubFolderDetails}>
                <span className={classes.SubFolderUpdate}>
                  Updated on 23 March by Kate
                </span>
                <br/>
                <span className={classes.SubFolderSize}>
                  400.2 KB
                </span>
              </div>
              <a className={classes.SubFolderOptions} href="#">
                <img src={optionIcon} alt="Options" />
              </a>
            </Col>
          </Row>
          </div>
          <div className={classes.FolderShowMore}>
            <button className={classes.btnGreen}>Show more</button>
          </div>
        </div>
      </Col>
      <Col md={12}>
        <div className={classes.Folder}>
          <div className={classes.FolderHeader}>
            <h4 className={classes.FolderName}>
              Mootral
            </h4>
          </div>
          <div className={classes.SubFolder}>
          <Row>
            <Col md={1}>
              <img className={classes.FolderIcon} src={folderIcon} alt="Folder" />
            </Col>
            <Col md={11}>
              <h4 className={classes.SubFolderName}>
                Mootral presentation
              </h4>
              <div className={classes.SubFolderDetails}>
                <span className={classes.SubFolderUpdate}>
                  Updated on 23 March by Kate
                </span>
                <br/>
                <span className={classes.SubFolderSize}>
                  400.2 KB
                </span>
              </div>
              <a className={classes.SubFolderOptions} href="#">
                <img src={optionIcon} alt="Options" />
              </a>
            </Col>
          </Row>
          </div>
          <div className={classes.SubFolder}>
          <Row>
            <Col md={1}>
              <img className={classes.FolderIcon} src={folderIcon} alt="Folder" />
            </Col>
            <Col md={11}>
              <h4 className={classes.SubFolderName}>
                Mootral presentation
              </h4>
              <div className={classes.SubFolderDetails}>
                <span className={classes.SubFolderUpdate}>
                  Updated on 23 March by Kate
                </span>
                <br/>
                <span className={classes.SubFolderSize}>
                  400.2 KB
                </span>
              </div>
              <a className={classes.SubFolderOptions} href="#">
                <img src={optionIcon} alt="Options" />
              </a>
            </Col>
          </Row>
          </div>
          <div className={classes.FolderShowMore}>
            <button className={classes.btnGreen}>Show more</button>
          </div>
        </div>
      </Col>
      <Col md={12}>
        <div className={classes.Folder}>
          <div className={classes.FolderHeader}>
            <h4 className={classes.FolderName}>
              Neem Biotech
            </h4>
          </div>
          <div className={classes.SubFolder}>
          <Row>
            <Col md={1}>
              <img className={classes.FolderIcon} src={folderIcon} alt="Folder" />
            </Col>
            <Col md={11}>
              <h4 className={classes.SubFolderName}>
                Neem Biotech presentation
              </h4>
              <div className={classes.SubFolderDetails}>
                <span className={classes.SubFolderUpdate}>
                  Updated on 23 March by Kate
                </span>
                <br/>
                <span className={classes.SubFolderSize}>
                  400.2 KB
                </span>
              </div>
              <a className={classes.SubFolderOptions} href="#">
                <img src={optionIcon} alt="Options" />
              </a>
            </Col>
          </Row>
          </div>
          <div className={classes.SubFolder}>
          <Row>
            <Col md={1}>
              <img className={classes.FolderIcon} src={folderIcon} alt="Folder" />
            </Col>
            <Col md={11}>
              <h4 className={classes.SubFolderName}>
                Neem Biotech presentation
              </h4>
              <div className={classes.SubFolderDetails}>
                <span className={classes.SubFolderUpdate}>
                  Updated on 23 March by Kate
                </span>
                <br/>
                <span className={classes.SubFolderSize}>
                  400.2 KB
                </span>
              </div>
              <a className={classes.SubFolderOptions} href="#">
                <img src={optionIcon} alt="Options" />
              </a>
            </Col>
          </Row>
          </div>
          <div className={classes.FolderShowMore}>
            <button className={classes.btnGreen}>Show more</button>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default DocumentRepositoryLayout;
