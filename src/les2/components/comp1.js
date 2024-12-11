import React,{useState} from 'react';
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"
import p4 from "../images/p4.jpg"
import p5 from "../images/p5.jpg"
import p6 from "../images/p6.jpg"



function TheGalerry(){
    const [galery, setGalery]=useState([p1,p2,p3,p4,p5,p6]);
    const [index,setIndex]=useState(0);

    const before=()=>{

            setIndex(index-1)};
    const next=()=>{
            setIndex(index+1)};

    return(
        <div>
            <h1>Hello😁😍😁</h1>
            
            <button onClick={before}> 🔚 </button>
            
            <img src={galery[index]} />
            <button onClick={next}> 🔜 </button>

        </div>
    );

}

export default TheGalerry;
