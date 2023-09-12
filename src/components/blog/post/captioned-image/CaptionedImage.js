import React from 'react'
import PropTypes from 'prop-types'

import './CaptionedImage.css'

const CaptionedImage = ({ imgSrc, altTxt, caption }) => {
  return (
    <div className='captioned-image'>
      <img className='picture' src={imgSrc} alt={altTxt}></img>
      {caption && <div>{caption}</div>}
    </div>
  )
}

CaptionedImage.propTypes = {
  imgSrc: PropTypes.string,
  altTxt: PropTypes.string,
  caption: PropTypes.string
}

export default CaptionedImage
