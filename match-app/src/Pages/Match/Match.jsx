import React, { useState } from "react";
import classes from './Match.module.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Likes } from '../../Components/likes/likes'
import { LikesSent } from '../../Components/likesSent/likesSent'
import { TopPicks } from '../../Components/top picks/topPicks'



export const Match = () => {

    const [activeTab, setActiveTab] = useState('#')

    return(
        <div className='containerIn'>
            <div className={classes.tabs}>
                <div className={classes.tab} onClick={() => setActiveTab('#')}>
                    likes
                </div>
                <div className={classes.br}></div>
                <div className={classes.tab} onClick={() => setActiveTab('topPicks')}>
                    top picks
                </div>
                <div className={classes.br}></div>
                <div className={classes.tab} onClick={() => setActiveTab('likesSent')}>
                    likes sent
                </div>
            </div>

            <div className={classes.listContent}>
                <div className={activeTab === '#' ? classes.active : classes.deActive}>
                    <Likes/>
                </div>
                <div className={activeTab === 'topPicks' ? classes.active : classes.deActive}>
                    <TopPicks />
                </div>
                <div className={activeTab === 'likesSent' ? classes.active : classes.deActive}>
                    <LikesSent />
                </div>    
            

            </div>
        </div>
    )
}
