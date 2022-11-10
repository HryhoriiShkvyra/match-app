import React, {useState} from "react";
import classes from './Login.module.css'
import { RegistrationPage } from "../RegistrationForm/RegistrationForm";

export const Login = ({add, data, setData}) => {

    // this window is shows only if ACTIVE is TRUE
    const [active, setActive] = useState(true)
    // callback from RegistrationForm. do this ACTIVE is FALSE
    const activeLogin = (active) => {
        setActive(active)
    }

    // 
    const checkLoginInput = (e) => {
        e.preventDefault()
        const dataValue = {
            ...data
        }
        if (dataValue === loginValue) {
            console.log('work')
        }
        console.log('not work')
        console.log(dataValue)
    }

    const [loginValue, setLoginValue] = useState([{login: '', password: ''}])
    console.log(loginValue)
    


    return(
        <div>
            { active ?
                <div className={classes.loginActive}>
                    <div className='container'>
                        <div className={classes.loginPage}>
                            <div className={classes.loginTitle}>Login Page</div>
                            <form className={classes.formInner}>
                                <input
                                    value={loginValue.login}
                                    onChange={e => setLoginValue({...loginValue, login: e.target.value})}
                                    className={classes.input} 
                                    placeholder="enter Login"
                                />
                                <input 
                                    value={loginValue.password}
                                    onChange={e => setLoginValue({...loginValue, password: e.target.value})}
                                    className={classes.input} 
                                    type='password' 
                                    placeholder="enter password"/>
                                <div className={classes.btns}>
                                    <button onClick={checkLoginInput} className={classes.btn}>Log In</button>
                                    <button onClick={() => setActive(false)} className={classes.btn}>Sign up</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            :   <RegistrationPage add={add} active={activeLogin}/>
            }
        </div>
       
    )
}