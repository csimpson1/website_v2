import React from 'react'
import PropTypes from 'prop-types'
import './LogoAnimation.css'

export const LogoAnimationHover = ({ angle }) => {
  const xRotation = angle ?? '0deg'

  return (
    <div className='holder-ht' style={{ transform: `rotateX(${xRotation})` }}>
      <span className='ring-3-ht'>
        <span className='ring-2-ht'>
          <span className='ring-1-ht'>
            <span className='ring-0-ht'></span>
          </span>
        </span>
      </span>
    </div>
  )
}

LogoAnimationHover.propTypes = {
  angle: PropTypes.Number
}

export default LogoAnimationHover
