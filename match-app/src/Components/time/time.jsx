import React from "react";




export const Time = () => {

    function tick() {
        const element = (
            <div >
                <h1>time</h1>
                <h2>it is {new Date.now()}.</h2>
            </div>
        );
        
    }
    
    setInterval(tick, 1000)
    
    return(
        <div>
        </div>
    )
} 