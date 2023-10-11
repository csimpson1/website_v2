import React from 'react';

import './Thumbnail.scss';

export const Thumbnail = ({ src }) => {
  return <img src={src} className='thumbnail' />;
};

export default Thumbnail;
