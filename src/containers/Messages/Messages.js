import React, { Component } from 'react';

import Base from '../../components/Layout/Base/Base';
import MessagesLayout from '../../components/Layout/MessagesLayout/MessagesLayout';

class Messages extends Component {
  render () {
    return (
      <div>
        <Base>
          <MessagesLayout />
        </Base>
      </div>
    );
  }
}

export default Messages;
