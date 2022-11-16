import React, {useState} from "react";
import classes from './Profile.module.css'
import { IMG } from '../../assets/img.jpg'


export const Profile = ({userData, setUserData}) => {


 
    return(
        <div className="container">
            <div className={classes.Title}>Pfinder</div>
            <div className={classes.content}>
                {/* <img className={classes.photo} src={IMG} alt='img'/> */}
                <div className={classes.nameField}>
                    <div className={classes.name}></div>
                    <div className={classes.age}></div>
                    <div className={classes.verification}></div>
                </div>

            </div>
        </div>
    )
}