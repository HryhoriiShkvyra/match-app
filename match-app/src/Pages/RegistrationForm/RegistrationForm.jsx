import React from "react";
import { useState } from "react";
import classes from './RegistrationForm.module.css'


export const RegistrationPage = ({add, setActive}) => {

    const [userLogin, setUserLogin] = useState({name:'', password: ''});

    const addNewItem = (e) => {
        e.preventDefault();
        const newUserLogin = {
            ...userLogin, id: Date.now()

        }
        add(newUserLogin)
        setUserLogin({name: '', password: ''})
        setActive(true)
        console.log(addNewItem)
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
            </form>
        </div>
    )
}

