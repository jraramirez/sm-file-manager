import React from 'react';
import { Row, Col } from 'react-bootstrap';

import imgStaff from '../../../assets/images/paris.jpg';
import msgIcon from '../../../assets/images/icons/msg.png';

import classes from './MessagesLayout.module.scss';

const MessagesLayout = (props) => (
  <div className={classes.MessagesLayout}>
    <Row>
      <Col className={classes.Conversations} md={3}>
        <div className={classes.ConversationsHeader}>
          Messaging
          <img src={msgIcon} alt="Messaging" />
        </div>
        <div className={classes.ConversationsSearch}>
          <img src={msgIcon} alt="Search Messages" />
          <form>
            <input className={classes.SearchMessages} type="text" name="SearchMessages" placeholder="Search Messages" />
          </form>
        </div>
        <div className={classes.ConversationsList}>
          <ul>
            <li>
              <Row>
                <Col className={classes.ConversationUserThumb} md={3}>
                  <img src={imgStaff}/>
                </Col>
                <Col className={classes.ConversationTexts} md={9}>
                  <Row>
                    <Col md={12}>
                    <span className={classes.ConversationUserName}>
                    Cassie
                    </span>
                    <span className={classes.ConversationTime}>
                    3:50 PM
                    </span>
                    </Col>
                    <Col className={classes.ConversationPreview} md={12}>
                    Thanks
                    </Col>
                </Row>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col className={classes.ConversationUserThumb} md={3}>
                  <img src={imgStaff}/>
                </Col>
                <Col className={classes.ConversationTexts} md={9}>
                  <Row>
                    <Col md={12}>
                    <span className={classes.ConversationUserName}>
                    Cassie
                    </span>
                    <span className={classes.ConversationTime}>
                    3:50 PM
                    </span>
                    </Col>
                    <Col className={classes.ConversationPreview} md={12}>
                    Thanks
                    </Col>
                </Row>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Col>
      <Col className={classes.ConversationExpanded} md={9}>
        <div className={classes.ConversationExpandedHeader}>
          New Message
        </div>
        <div className={classes.ConversationExpandedSearch}>
          <form>
            <input className={classes.SearchNames} type="text" name="SearchNames" placeholder="Type a name or multiple names" />
          </form>
        </div>
        <div className={classes.ConversationExpandedBody}>
          
        </div>
        <div className={classes.ConversationExpandedCompose}>
          <form>
            <input className={classes.ComposeMessage} type="text" name="SearchMessages" placeholder="Write a message or attach a file" />
          </form>
          <img className={classes.ExpandButton} src={msgIcon} alt="Expand"/>
          <div className={classes.ConversationExpandedControls}>
            <img src={msgIcon} alt="Image" />
            <img src={msgIcon} alt="Attach" />
            <img src={msgIcon} alt="GIF" />
            <img src={msgIcon} alt="Smiley" />
            <button className={classes.SendButton}>Send</button>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default MessagesLayout;
