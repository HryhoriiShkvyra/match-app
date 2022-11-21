import React, {useState} from "react";
import classes from './LikesSent.module.css';


export const LikesSent = () => {

    const [content, setContent] = useState(false)

    return(
        <div >
            { content ?
                <div>null</div>
                :
                <div className={classes.content}>
                    <div className={classes.contentBtn}>
                        <button className={classes.btnF} >New Likes</button>
                    </div>
                    <div className={classes.main}>
                        <div className={classes.photo}>
                            <img></img>
                        </div>
                        <div>
                            Be seen faster. With Tinder Platinum we'll prioritize your likeZ.
                        </div> 
                    </div>
                    <div className={classes.contentBtnSecond}>
                            <button className={classes.btnS}>UPGRADE LIKES</button>
                    </div>
                </div>
            }
            
        </div>
    )
}