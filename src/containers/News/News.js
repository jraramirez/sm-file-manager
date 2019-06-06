import React, { Component } from 'react';

import Base from '../Base/Base';
import NewsLayout from '../../components/Layout/NewsLayout/NewsLayout';

class News extends Component {
  render () {
    return (
      <div>
        <Base>
          <NewsLayout />
        </Base>
      </div>
    );
  }
}

export default News;
