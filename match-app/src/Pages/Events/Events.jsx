import React from "react";
import classes from './Events.module.css'
import IMG1 from '../../assets/event/IMG1.jpg'
import IMG2 from '../../assets/event/IMG2.jpg'
import IMG3 from '../../assets/event/IMG3.jpg'



export const Events = () => {
    return(
        <div className='containerIn'>
                <div className={classes.firstBlock}>
                    <div className={classes.aboutBlock}>
                        <div className={classes.blockTitle}>Welcome to explore</div>
                        <div className={classes.blockSubTitle}>My vibe ...</div>
                    </div>
                    <div className={classes.cards}>
                        <div className={classes.cardSlim}>
                            <div >
                                <img className={classes.cardBackground}src={IMG1}/>
                            </div>
                            <div className={classes.cardText}>
                                <span className={classes.cardTitle}>
                                    Free Tonight
                                </span>
                                <div className={classes.cardAbout}>
                                    <span className={classes.cardDescription}>Down for something spontaneous</span>
                                    <span className={classes.cardType}>Discover</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardSlim}>
                            <div className={classes.cardBackground}>
                                <img className={classes.cardBackground}src={IMG2}/>
                            </div>
                            <div className={classes.cardText}>
                                <div className={classes.cardTitle}>
                                    Let's be Friend
                                </div>
                                <div className={classes.cardAbout}>
                                    <div className={classes.cardDescription}>Maybe even besties</div>
                                    <div className={classes.cardType}>Discover</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardWide}>
                            <div className={classes.cardBackground}>
                                <img className={classes.cardBackgroundWide}src={IMG3}/>
                                <div className={classes.cardTextWide}>
                                    <div className={classes.cardTitle}>
                                        Let's be Friend
                                    </div>
                                    <div className={classes.cardAbout}>
                                        <div className={classes.cardDescriptionWide}>Take me of your favorite cup of tea</div>
                                        <div className={classes.cardType}>Discover</div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.btnBlock}>
                                <div className={classes}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.secondBlock}>
                <div className={classes.aboutBlock}>
                        <div className={classes.blockTitle}>Welcome to explore</div>
                        <div className={classes.blockSubTitle}>My vibe ...</div>
                    </div>
                    <div className={classes.cards}>
                        <div className={classes.cardSlim}>
                            <div >
                                <img className={classes.cardBackground}src={IMG1}/>
                            </div>
                            <div className={classes.cardText}>
                                <span className={classes.cardTitle}>
                                    Free Tonight
                                </span>
                                <div className={classes.cardAbout}>
                                    <span className={classes.cardDescription}>Down for something spontaneous</span>
                                    <span className={classes.cardType}>Discover</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}