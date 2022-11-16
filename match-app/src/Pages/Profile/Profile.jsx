import React, {useState} from "react";
import classes from './Profile.module.css'
import { IMG } from '../../assets/img.jpg'

export const Profile = ({userData, setUserData}) => {


    const user = (userData.find(user => user.id === 1))

    return(
        <div className="containerIn">
            <div className={classes.Title}>Y profile</div>
            <div className={classes.content}>
                <div className={classes.photo}>{user.photo}</div>
                <div className={classes.userAbout}>
                    <div className={classes.name}>{user.name},</div>
                    <div className={classes.age}>{user.age}</div>
                    <div className={classes.verification}>true/false</div>
                </div>
                <div className={classes.btnsFirst}>
                    <div className={classes.btnItem}> 
                        <button className={classes.btn}>
                            <i class="fa-solid fa-gear"></i>
                        </button>
                        SETTINGS
                    </div>
                    <div className={classes.btnItemAlpha}> 
                        <button className={classes.btnAlpha}>
                                <i class="fa-solid fa-pen"></i>
                        </button>
                        EDIT PROFILE
                    </div>
                    <div className={classes.btnItem}> 
                        <button className={classes.btn}>
                            <i class="fa-solid fa-shield"></i>
                        </button>
                        SAFETY
                    </div>
                </div>
                <div className={classes.btnsSecond}>
                    <div className={classes.btnItem}>
                        <button className={classes.btn}>
                            <i class="fa-solid fa-star"></i>
                        </button>
                        5 Super Likes
                    </div>
                    <div className={classes.btnItem}>
                        <button className={classes.btn}>
                            <i class="fa-solid fa-bolt"></i>
                        </button>
                        5 Super Likes
                    </div>
                    <div className={classes.btnItem}>
                        <button className={classes.btn}>
                        <i class="fa-solid fa-fire"></i>
                        </button>
                        5 Super Likes
                    </div>
                </div>
                <div className={classes.subscription}>Subscription</div>
               {/* <div className={classes.city}>{userData.city}</div> */}
               {/* <div className={classes.interests}>{userData.interests}</div> */}
               {/* <div className={classes.about}>{user.about}</div>     */}

            </div>
        </div>
    )
}