import {descriptions} from '../../../constants/BuiltDescriptionConstants';


export const getRandomNum = () => {
    const randomIdx = new Int8Array(1);
    window.self.crypto.getRandomValues(randomIdx);
    return Math.abs(randomIdx[0]) % descriptions.length;
}

export const BuiltDescription = () => {
    const { designed, built } = descriptions[getRandomNum()];

    return (
        <div>This website was designed {designed} and built {built}.</div>
    );
}

export default BuiltDescription;