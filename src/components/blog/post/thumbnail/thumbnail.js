import React from 'react';

import './thumbnail.css';

export const Thumbnail = ({ src }) => {
  return <img src={src} className='thumbnail' />;
};

export default Thumbnail;
