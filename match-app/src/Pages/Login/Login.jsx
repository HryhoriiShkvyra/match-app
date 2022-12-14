import React, {useState} from "react";
import classes from './Login.module.css'
import { RegistrationPage } from "../RegistrationPage/RegistrationPage";
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


export function Login({create, setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // const [loginValue, setLoginValue] = useState([{login: '', password: ''}])

    // this window is shows only if ACTIVE is TRUE
    const [active, setActive] = useState(true)
    // callback from RegistrationForm. do this ACTIVE is FALSE
    const activeLogin = (active) => {
        setActive(active)
    }


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }


    return(
        <div>
            { active ?
                <div className={classes.loginActive}>
                    <div className='container'>
                        <div className={classes.loginPage}>
                            <div className={classes.loginTitle}>Login Page</div>
                            <form onSubmit={handleSubmit} className={classes.formInner}>
                                <input
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}

                                    className={classes.input} 
                                    placeholder="enter Login"
                                
                                />
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className={classes.input} 
                                    type='password' 
                                    placeholder="enter password"
                                />
                                    
                                <div className={classes.btns}>
                                    <button className={classes.btn}>Log In</button>
                                    <button onClick={() => setActive(false)} className={classes.btn}>Sign up</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            :   <RegistrationPage create={create} active={activeLogin}/>
            }
        </div>
       
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}