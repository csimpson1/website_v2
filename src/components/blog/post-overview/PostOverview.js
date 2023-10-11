import { PostData } from '../post-data/PostData';
import PostCardSummary from '../post-summary-card/PostSummaryCard';
import React from 'react';

export const PostOverview = () => {
  return (
    <div>
      {PostData.map((post) => {
        return <PostCardSummary key={post.id} title={post.title} summary={post.summary} thumbNailSrc={post.thumbnailSrc} />;
      })}
    </div>
  );
};

export default PostOverview;
