import React from "react";
import { useState } from "react";
import classes from './RegistrationForm.module.css'


export const RegistrationPage = ({add, active}) => {

    const [userLogin, setUserLogin] = useState({name:'', password: ''});

    const addNewItem = (e) => {
        e.preventDefault();
        const newUserLogin = {
            ...userLogin, id: Date.now()

        }
        active(true)
        add(newUserLogin)
        setUserLogin({name: '', password: ''})
        
    }



    return(
        <div className="container">
            <div className={classes.title}>Registration Page</div>
            <form className={classes.formInner}>
                <input
                    value={userLogin.name}
                    onChange={e => setUserLogin({...userLogin, name: e.target.value})}
                    className={classes.input}
                    placeholder="enter Login"
                    type='text'
                />
                <input
                    value={userLogin.password}
                    onChange={e => setUserLogin({...userLogin, password: e.target.value})}
                    className={classes.input}
                    placeholder="enter Password"
                    type='password'
                />
                <button className={classes.btn} onClick={addNewItem}>Sign Up</button>
                <div className={classes.escapeBtnBlock}>
                    <button onClick={() => active(true)} className={classes.escapeBtn}>
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                </div>
                
            </form>
        </div>
    )
}

