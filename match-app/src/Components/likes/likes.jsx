import React, { useState } from "react";
import classes from './likes.module.css';


export const Likes = () => {

    const [content, setContent] = useState(false)

    return(
        <div >
            {content ? 
                    <div>
                        null
                    </div>
                :   <div className={classes.contentFalse}>
                        <div className={classes.contentFalseIcon}>
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div className={classes.contentFalseText}>
                            Increase your chances by boosting up your profile
                        </div>
                        <div className={classes.contentFalseBtn}>
                            <button className={classes.btn}>
                                <i class="fa-solid fa-bolt"></i>
                            </button>
                        </div>
                    </div>
            }
        </div>
    )
}