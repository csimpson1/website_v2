import React from 'react';
import Thumbnail from '../post/thumbnail/Thumbnail';

import './PostCardSummary';

const PostCardSummary = ({ title, summaryText, thumbNailSrc }) => {
  return (
    <details>
      <div className='post-card-summary-body'>
        <Thumbnail src={thumbNailSrc}></Thumbnail>
        <div>
          <h1 className='title'>{title}</h1>
          <summary className='summary'>{summaryText}</summary>
        </div>
      </div>
    </details>
  );
};

export default PostCardSummary;
