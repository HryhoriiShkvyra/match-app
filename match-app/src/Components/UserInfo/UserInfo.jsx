import React from "react";
import classes from './UserInfo.module.css'



const UserInfo = () => {
    return(
        <div>
            <div>
                <div className={classes.content}>
                    <div className={classes.nameBlock}>
                        <div className={classes.BlockTitle}>Name 99</div>
                        <div className={classes.userLife}>
                            <div className={classes.userLifeRow}>
                                <i class="fa-solid fa-suitcase"></i>
                                wort at count
                            </div>
                            <div className={classes.userLifeRow}>
                                <i class="fa-solid fa-graduation-cap"></i>
                                education degree count
                            </div>
                            <div className={classes.userLifeRow}>
                                <i class="fa-solid fa-house"></i>
                                Lives in count
                            </div>
                            <div className={classes.userLifeRow}>
                                <i class="fa-solid fa-house"></i>
                                sexual type count
                            </div>
                            <div className={classes.userLifeRow}>
                                <i class="fa-solid fa-location-dot"></i>
                                count miles/km away
                            </div>
                        </div>
                    </div>
                    <div className={classes.aboutMeBlock}>
                        <div className={classes.BlockTitle}>About Me</div>
                        <div className={classes.aboutBlockElse}>
                            <div className={classes.aboutDescription}>text about my self</div>
                            <div className={classes.ZodiacSign}> scorpio </div>
                        </div>
                        
                    </div>
                    <div className={classes.interestsBlock}>
                        <div className={classes.BlockTitle}>Interests</div>
                        <div className={classes.interests}>
                            <div className={classes.interest}>philosophy</div>
                        </div>
                    </div>
                    <div className={classes.btnsBlock}>
                        <div className={classes.FirstBtn}>
                            <h4>SHARE Name's PROFILE</h4>
                            <h6>SEE WHAT A FRIENDS THINKS</h6>
                        </div>
                        <div className={classes.SecondBtn}>
                            <h4>REPORT NAME</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserInfo;