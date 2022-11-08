import React, {useState} from "react";
import classes from './Login.module.css'
import { RegistrationPage } from "../RegistrationForm/RegistrationForm";

export const Login = ({add}) => {

    const [active, setActive] = useState(true)

    return(
        <div>
            { active ?
                <div className={classes.loginActive}>
                    <div className='container'>
                        <div className={classes.loginPage}>
                            <div className={classes.loginTitle}>Login Page</div>
                            <form className={classes.formInner}>
                                <input className={classes.input} placeholder="enter Login"/>
                                <input className={classes.input} type='password' placeholder="enter password"/>
                                <div className={classes.btns}>
                                    <button className={classes.btn}>Log In</button>
                                    <button onClick={() => setActive(false)} className={classes.btn}>Sign up</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            :   <RegistrationPage add={add} active={setActive}/>
            }
        </div>
       
    )
}