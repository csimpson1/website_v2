import './Homepage.css';
import BuiltDescription from '../about/built/BuiltDescription';
import LogoAnimation from './logo-animation/LogoAnimation';

const Homepage = () => {
    
    return (
        <div>
            <div className='homepage-container'>
                <div>Hello, my name is</div>
                <div>Colby Simpson</div>
                <div>and I am a </div>
                <div>developer</div>
                <BuiltDescription/>
                <div>
                    <div className="logo-row">
                    <LogoAnimation angle="75deg"/>
                    </div>
                    <div className="logo-row">
                        <LogoAnimation/>
                        <LogoAnimation/>
                        <LogoAnimation/>
                    </div>

                </div>
                <LogoAnimation></LogoAnimation>
            </div>
        </div>

    );
}

export default Homepage;
