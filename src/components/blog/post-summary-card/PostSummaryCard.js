import React from 'react';
import Thumbnail from '../post/thumbnail/Thumbnail';

import './PostSummaryCard.css';

const PostCardSummary = ({ title, summary, thumbNailSrc }) => {
  return (
    <div>
      <div className='post-card-summary-body'>
        <Thumbnail src={thumbNailSrc}></Thumbnail>
        <div>
          <h1 className='title'>{title}</h1>
          <summary className='summary'>{summary}</summary>
        </div>
      </div>
    </div>
  );
};

export default PostCardSummary;
