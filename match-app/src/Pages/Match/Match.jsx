import React, { useState } from "react";
import classes from './Match.module.css'
import { Likes } from '../../Components/likes/likes'
import { TopPicks } from '../../Components/TopPicks/TopPicks'
import { LikesSent } from '../../Components/LikesSent/LikesSent'



export const Match = ({userData, setUserData}) => {

    const [activeTab, setActiveTab] = useState('#')
    
    return(
        <div className='containerIn'>
            <div className={classes.tabs}>
                <div className={classes.tab} onClick={() => setActiveTab('#')}>
                    likes
                </div>
                <div className={classes.br}></div>
                <div className={classes.tab} onClick={() => setActiveTab('likesSent')}>
                    likes sent
                </div>
                <div className={classes.br}></div>
                <div className={classes.tab} onClick={() => setActiveTab('topPicks')}>
                    top picks
                </div>
                
            </div>

            <div className={classes.listContent}>
                <div className={activeTab === '#' ? classes.active : classes.deActive}>
                    <Likes userData={userData}/>
                </div>
                <div className={activeTab === 'likesSent' ? classes.active : classes.deActive}>
                    <LikesSent userData={userData}/>
                </div>      
                <div className={activeTab === 'topPicks' ? classes.active : classes.deActive}>
                    <TopPicks userData={userData}/>
                </div>
                

            </div>
        </div>
    )
}
