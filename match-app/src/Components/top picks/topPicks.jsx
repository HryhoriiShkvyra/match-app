import React from "react";
import classes from './topPicks.module.css';


export const TopPicks = (activeTab) => {
    return(
        <div className={activeTab === 'topPicks' ? 'active' : 'deActive'}>top picks</div>
    )
}