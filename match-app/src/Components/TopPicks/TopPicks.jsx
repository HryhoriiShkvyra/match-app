import React from "react";
import classes from './TopPicks.module.css';
import Data  from '../../Data/Data';

export const TopPicks = ({userData}) => {

  

    return(
        <div>
            
           
            <div className={classes.block}>
                <div className={classes.category}>Recently Active</div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <img />
                        <div className={classes.cardNameBlock}>
                        <div className={classes.nameAndAge}>{userData[3].name}, {userData[3].age}</div>
                            <div className={classes.onlineStatus}>
                                <div className={classes.statusOnline}>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                recently online
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img />
                        <div className={classes.cardNameBlock}>
                        <div className={classes.nameAndAge}>{userData[3].name}, {userData[3].age}</div>
                            <div className={classes.onlineStatus}>
                                <div className={classes.statusOnline}>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                recently online
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.btnBlock}>
                    <button className={classes.btn}>must be pagination on this btn</button>
                </div>
                
            </div>
            <div className={classes.block}>
                <div className={classes.category}>Recommended</div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <img />
                        <div className={classes.cardNameBlock}>
                        <div className={classes.nameAndAge}>{userData[3].name}, {userData[3].age}</div>
                            <div className={classes.onlineStatus}>
                                <div className={classes.statusLeft}>
                                    6h left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img />
                        <div className={classes.cardNameBlock}>
                        <div className={classes.nameAndAge}>{userData[3].name}, {userData[3].age}</div>
                            <div className={classes.onlineStatus}>
                                <div className={classes.statusLeft}>
                                    6h left
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.btnBlock}>
                    <button className={classes.btn}>must be pagination on this btn</button>
                </div>
                
            </div>
        </div>
    )
}