import './Homepage.css';
import BuiltDescription from '../about/built/BuiltDescription';
import LogoAnimation from './logo-animation/LogoAnimation';
import LogoAnimationHover from './logo-animation/LogoAnimationHover';

const Homepage = () => {
    
    return (
        <div>
            <div className='homepage-container'>
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
                {/* <div>
                    <div className="logo-row">
                    <LogoAnimation angle="75deg"/>
                    </div>
                    <div className="logo-row">
                        <LogoAnimation angle="65deg"/>
                        <LogoAnimation angle="65deg"/>
                        <LogoAnimation angle="65deg"/>
                    </div>
                </div> */}
                <LogoAnimationHover angle="65deg"></LogoAnimationHover>
            </div>
        </div>

    );
}

export default Homepage;
