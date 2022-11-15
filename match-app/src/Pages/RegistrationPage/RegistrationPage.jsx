import React from "react";
import { useState } from "react";
import useLocalStorage from "../../Components/Hooks/useLocalStorage";
import classes from './RegistrationPage.module.css'


export const RegistrationPage = ({active, create}) => {

    const [userData, setUserData] = useState(
        {name:'', 
        password: '',
        photo: '',
        about: '',
        born: ''
        }
    );

    const addNewUser = (e) => {
        e.preventDefault();
        const newUser = {
            ...userData, id: Date.now()
        }
        create(newUser)
        console.log('added new user')
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
                    className={classes.input}
                    placeholder="upload photo"
                    type='text'
                />
                <input
                    value={userData.about}
                    onChange={e => setUserData({...userData, about: e.target.value})}
                    className={classes.input}
                    placeholder="enter text about your self"
                    type='text'
                />
                <input
                    value={userData.born}
                    onChange={e => setUserData({...userData, born: e.target.value})}
                    className={classes.input}
                    placeholder="enter your born data"
                    type='text'
                />
                <button className={classes.btn} onClick={addNewUser}>Sign Up</button>
                <div className={classes.escapeBtnBlock}>
                    <button onClick={() => active(true)} className={classes.escapeBtn}>
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                </div>
                
            </form>
        </div>
    )
}

