import React from "react";
import classes from './UserInfo.module.css'



const UserInfo = () => {
    return(
        <div className="containerIn">
            <div>
                <div className={classes.content}>
                    <div className={classes.openedInfoAbout}>
                        <div className={classes.openedInfoName}>Name 99</div>
                        <div className={classes.openedInfoAboutUser}>
                            <div className={classes.openedInfoAboutUserCount}>
                            <i class="fa-solid fa-suitcase"></i>
                            wort at count
                        </div>
                        <div className={classes.openedInfoAboutUserCount}>
                            <i class="fa-solid fa-graduation-cap"></i>
                            education degree count
                        </div>
                        <div className={classes.openedInfoAboutUserCount}>
                            <i class="fa-solid fa-house"></i>
                            Lives in count
                            </div>
                        <div className={classes.openedInfoAboutUserCount}>
                            <i class="fa-solid fa-house"></i>
                            sexual type count
                        </div>
                        <div className={classes.openedInfoAboutUserCount}>
                            <i class="fa-solid fa-location-dot"></i>
                            count miles/km away
                        </div>
                        </div>
                            <div className={classes.openedInfoUserAbout}>
                                <div className={classes.openedInfoUserName}>
                                    About Me
                                </div>
                                <div  className={classes.openedInfoUserDescriptionBlock}>
                                    <div className={classes.openedInfoUserDescription}>
                                        user about himself
                                    </div>
                                    <div className={classes.openedInfoUserZodiacSign}>
                                        icon
                                        zodiac sign               
                                    </div>
                                        
                                        
                                        
                                </div>
                                    <div className={classes.openedInfoUserInterests}>
                                        <div className={classes.openedInfoUserInterest}>
                                            {/* icon
                                            count */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.moreAction}>
                            <div className={classes.shareField}>
                                <div className={classes.shareBtn}>
                                    <button className={classes.share}>
                                        Share profile to your friends
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

        </div>
    );
};

export default UserInfo;