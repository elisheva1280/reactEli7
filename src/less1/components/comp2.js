// import p1 from '../images/p1.png';
// import myImage from '../../public/13.png';
import myImage from '../images/myImage.png';

export default function Wow(prop){
    return(
        <div>
        <h1>🫱🏻‍🫲🏿🫱🏼‍🫲🏽🤝,{prop.name}!!!</h1>
        <img src={myImage} />
        </div>
    );
}