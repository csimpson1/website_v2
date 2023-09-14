import React from 'react';
import { PropTypes } from 'prop-types';

import './LogoAnimation.css';

export const LogoAnimation = ({ angle }) => {
  const xRotation = angle ?? '0deg';

  return (
    <div className='holder' style={{ transform: `rotateX(${xRotation})` }}>
      <span className='ring-3'>
        <span className='ring-2'>
          <span className='ring-1'>
            <span className='ring-0'></span>
          </span>
        </span>
      </span>
    </div>
  );
};

LogoAnimation.propTypes = {
  angle: PropTypes.Number
};

export default LogoAnimation;
