import React, {useState} from "react";
import classes from './Chat.module.css'

export const Chat = () => {
    
    const [chatActive, setChatActive] = useState(false)
    
    
    return(
        <div className="containerIn">
            <div className={classes.description}></div>
            <div className={classes.pageInner}>
                <div className={classes.searchCount}>
                    <div className={classes.searchIcon}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input className={classes.search} placeholder='search count matches'/>
                </div>
                <div className={classes.cardsTitle}>New Match</div>
                <div className={classes.cards}>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                </div>
                <div className={classes.chat}>
                    <div className={classes.chatBlock}>
                        <div className={classes.chatIcon}><i class="fa-solid fa-comments"></i></div>
                        <div className={classes.chatDescription}>
                            <h1 className={classes.background}>Say Hello</h1>
                            <h3>Tap on a new match above to send a message</h3>
                        </div>
                        
                    </div>
                </div>
                <div className={classes.chatActive}></div>
            </div>
        </div>
    )
}