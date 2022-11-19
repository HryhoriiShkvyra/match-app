import React from "react";
import classes from './topPicks.module.css';


export const TopPicks = () => {
    return(
        <div className={classes.content}>
            <div >
                <button className={classes.btn}>New Likes</button>
            </div>
            <div className={classes.main}>
                <div className={classes.photo}>
                    <img></img>
                </div>
                <div>
                    Be seen faster. With Tinder Platinum we'll prioritize your likeZ.
                </div> 
            </div>
            <div className={classes.contentBtn}>
                    <button className={classes.btn}>UPGRADE LIKES</button>
                </div>
        </div>
    )
}