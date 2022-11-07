import React, {useState} from 'react'
import classes from'./MyButton.module.css'

export const MyButton = ({children, visible, setVisible}) => {



    const hiddenBtn = [classes.myBtn]
    if(visible) {
        hiddenBtn.push(classes.active)
        console.log('work')
    }

    return(
        <button className={hiddenBtn.join('-')} onClick={() => setVisible(false)}>
            {children}
        </button>
    );
};

