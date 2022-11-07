import React from "react";
import './MyInput.css'


export const MyInput = ({...props}) => {
    return(
        <input {...props} className="myInput" placeholder="enter text" />
    )
}