import React from "react";
import { useState } from "react";
import classes from './RegistrationPage.module.css'

export const RegistrationPage = ({active, create}) => {

    const [userData, setUserData] = useState({name:'', password: '', photo: ''});




    const addNewItem = (e) => { 
        e.preventDefault();
        const newUserLogin = {
            ...userData, id: Date.now()
        }
        active(true)
        create(newUserLogin)
        setUserData({name: '', password: '', photo: '', about: ''})
        
    }



    return(
        <div className="container">
            <div className={classes.title}>Registration Page</div>
            <form className={classes.formInner}>
                <input
                    value={userData.name}
                    onChange={e => setUserData({...userData, name: e.target.value})}
                    className={classes.input}
                    placeholder="enter Login"
                    type='text'
                />
                <input
                    value={userData.password}
                    onChange={e => setUserData({...userData, password: e.target.value})}
                    className={classes.input}
                    placeholder="enter Password"
                    type='password'
                />
                <input
                    value={userData.photo}
                    onChange={e => setUserData({...userData, photo: e.target.value})}
                    className={classes.inputFile}
                    type='file'
                />
                <input
                    value={userData.about}
                    onChange={e => setUserData({...userData, about: e.target.value})}
                    className={classes.inputAbout}
                    placeholder="enter about"
                    type='text'
                />
                <button className={classes.btn} onClick={addNewItem}>Sign Up</button>
                <div className={classes.escapeBtnBlock}>
                    <button onClick={() => active(true)} className={classes.escapeBtn}>
                        s<i class="fa-solid fa-arrow-left"></i>
                    </button>
                </div>
                
            </form>
        </div>
    )
}

