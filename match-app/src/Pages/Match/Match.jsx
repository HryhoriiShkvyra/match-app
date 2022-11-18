import React, { useState } from "react";
import classes from './Match.module.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Likes } from '../../Components/likes/likes'
import { LikesSent } from '../../Components/likesSent/likesSent'
import { TopPicks } from '../../Components/top picks/topPicks'



export const Match = () => {

    const [activeTab, setActiveTab] = useState()
    console.log(activeTab)

    return(
        <div className='containerIn'>
            <div className={classes.lists}>
                <div setVisible={setActiveTab} onClick={() => setActiveTab('#')}>
                    likes
                </div>
                <div onClick={() => setActiveTab('topPicks')}>
                    top picks
                </div>
                <div onClick={() => setActiveTab('likesSent')}>
                    likes sent
                </div>
            </div>
            {/* <Link onClick={() => setActivePage('profile')} className={activePage === 'profile' ? 'active' : 'menuBtn'} to='/Profile'>  */}

            <div className={classes.listContent}>
            <Likes visible={activeTab} activeTab={activeTab} />
            <TopPicks activeTab={activeTab} />
            <LikesSent activeTab={activeTab} />

            </div>
        </div>
    )
}
