import React, {useState} from "react";
import classes from './Profile.module.css'



export const Profile = ({data}) => {




    return(
        <div className="container">

            <div className={classes.pageTitle}>Profile</div>
            <div className={classes.pageContent}>
                <div>
                    <div className={classes.id}></div>
                    <div className={classes.name}>{data.password}</div>
                    {/* <input className={classes.input} placeholder='value from localeStorage'></input>
                    <div className={classes.about}>description about what we want to change</div> */}
                </div>

            <div className={classes.Title}>Y profile</div>
            <div className={classes.content}>
               <div className={classes.name}>{userData.name}</div>
               <div className={classes.age}>{userData.age}</div>
               <div className={classes.city}>{userData.city}</div>
               <div className={classes.interests}>{userData.interests}</div>
               <div className={classes.about}>{userData.about}</div>
               <div className={classes.photo}>{userData.photo}</div>
            </div>
        </div>
    )
}