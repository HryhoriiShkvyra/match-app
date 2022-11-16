import React, {useState} from "react";
import classes from './Profile.module.css'
import { IMG } from '../../assets/img.jpg'

export const Profile = ({userData, setUserData}) => {


    const user = (userData.find(user => user.id === 1668590764155))
 
    // const idValue = (user.id.map(index + 1))
    // console.log(user.id[0])

    return(
        <div className="container">
            <div className={classes.Title}>Y profile</div>
            <div className={classes.content}>
               <div className={classes.name}>{user.name}</div>
               <div className={classes.age}>{user.age}</div>
               {/* <div className={classes.city}>{userData.city}</div> */}
               {/* <div className={classes.interests}>{userData.interests}</div> */}
               <div className={classes.about}>{user.about}</div>
               <div className={classes.photo}>{user.photo}</div>

            </div>
        </div>
    )
}