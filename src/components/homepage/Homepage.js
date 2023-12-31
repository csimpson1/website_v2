import React from 'react';

import './Homepage.css';
// import BuiltDescription from '../about/built/BuiltDescription'
// import LogoAnimation from './logo-animation/LogoAnimation'
// import LogoAnimationHover from './logo-animation/LogoAnimationHover'
// import TableOfContents from '../blog/post/table-of-contents/TableOfContents'
// import TestPost from '../blog/post/TestPost';
//import TestPost2 from '../blog/post/TestPost2';
import PostOverview from '../blog/post-overview/PostOverview';

const Homepage = () => {
  return (
    <div>
      <PostOverview></PostOverview>
      {/* <TestPost2></TestPost2> */}
      {/* <div className='homepage-container'>
                <div>Hello, my name is</div>
                <div>Colby Simpson</div>
                <div>and I am a </div>
                <div>developer</div>
                <BuiltDescription/>
                <div className="plane-top">
                    <div className="logo-row">
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                    </div>
                    <div className="logo-row">
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                    </div>
                    <div className="logo-row">
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                    </div>
                    <div className="logo-row"> 
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                    </div>
                </div>
                <div className="plane-front-face">
                    <div className="logo-row">
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                    </div>
                    <div className="logo-row">
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                    </div>
                    <div className="logo-row">
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                    </div>
                    <div className="logo-row"> 
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                        <LogoAnimationHover/>
                    </div>
                </div>
                <div>
                    <div className="logo-row">
                    <LogoAnimation angle="75deg"/>
                    </div>
                    <div className="logo-row">
                        <LogoAnimation angle="65deg"/>
                        <LogoAnimation angle="65deg"/>
                        <LogoAnimation angle="65deg"/>
                    </div>
                </div> 
                <LogoAnimationHover angle="65deg"></LogoAnimationHover>
            </div> */}
    </div>
  );
};

export default Homepage;
