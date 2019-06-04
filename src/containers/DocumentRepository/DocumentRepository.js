import React, { Component } from 'react';

import Base from '../../components/Layout/Base/Base';
import DocumentRepositoryLayout from '../../components/Layout/DocumentRepositoryLayout/DocumentRepositoryLayout';

class DocumentRepository extends Component {
  render () {
    return (
      <div>
        <Base>
          <DocumentRepositoryLayout />
        </Base>
      </div>
    );
  }
}

export default DocumentRepository;
