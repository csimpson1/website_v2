import './Homepage.css';
import BuiltDescription from '../about/built/BuiltDescription';

const Homepage = () => {
    return (
        <div>
            <div className='homepage-container'>
                <div>Hello, my name is</div>
                <div>Colby Simpson</div>
                <div>and I am a </div>
                <div>developer</div>
                <BuiltDescription></BuiltDescription>
            </div>
        </div>

    );
}

export default Homepage;
