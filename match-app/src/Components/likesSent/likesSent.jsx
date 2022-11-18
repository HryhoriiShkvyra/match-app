import React from "react";
import classes from './LikesSent.module.css';


export const LikesSent = (activeTab) => {
    return(
        <div className={activeTab === 'likesSent' ? 'active' : 'deActive'}>likes  sent</div>
    )
}