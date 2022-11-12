import React from "react";
import classes from './Settings.module.css'




export const Settings = () => {
    return(
        <div>
            <div className={classes.settingsInner}>
                <div>
                <div>
                    <div className={classes.value}>value from localeStorage</div>
                    <input className={classes.input} placeholder='value from localeStorage'></input>
                    <div className={classes.about}>description about what we want to change</div>
                </div>
                </div>
            </div>
        </div>
    )
}