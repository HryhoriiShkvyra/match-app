import React from "react";
import { Profile } from "../Profile/Profile";
import { RegistrationPage } from "../RegistrationPage/RegistrationPage";
import classes from './Main.module.css'

const Main = ({userData, setUserData, create}) => {
    return (
        <div className={classes.main}>
            <Profile userData={userData} setUserData={setUserData}/>
            <RegistrationPage create={create}/>

        </div>
    );
};

export default Main;