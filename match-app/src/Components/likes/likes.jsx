import React, { useState } from "react";
import classes from './likes.module.css';


export const Likes = (activeTab) => {

    const rootClass = [classes.tab]
    const [visible, setVisible] = useState()

    if(visible) {
        rootClass.push(classes.active)
    }

    // const rootClasses = [cl.myModal]

    // if (visible) {
    //     rootClasses.push(cl.active);



    return(
        <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
            <i class="fa-solid fa-heart"></i>
        </div>
    )
}