import React from "react";
import classes from './Profile.module.css'

export const Profile = () => {
    return(
        <div className="container">
            <div className={classes.pageTitle}>Profile</div>
            <div className={classes.pageContent}>
                <div>
                    <div className={classes.value}>value from localeStorage</div>
                    <input className={classes.input} placeholder='value from localeStorage'></input>
                    <div className={classes.about}>description about what we want to change</div>
                </div>
            </div>
        </div>
    )
}