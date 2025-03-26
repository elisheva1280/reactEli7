import { Component } from "react";
import Wow from "../less1/components/comp2";

export function HocPrintProps(Component){
    return function HocPrintProps(props){
        console.log(props);
        return(
            <>
            <h1>😏😳🫢🤥🤥🤥🤓🧐🫵🫵🫶</h1>
            <Component {...props}></Component>
            
            </>
        )
    }
}

