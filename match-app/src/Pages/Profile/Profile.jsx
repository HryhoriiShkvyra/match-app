import React, {useState} from "react";
import classes from './Profile.module.css'

export const Profile = () => {

    const [userData, setUserData] = useState(
        {
            name: 'Hryhorii',
            age: '22',
            city: 'Kyiv',
            interests: 'books, walking, philosophy',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti rerum nostrum consequatur ipsum soluta,',
            photo: '',
        }
    )




    return(
        <div className="container">
            <div className={classes.Title}>Y profile</div>
            <div className={classes.content}>
               <div className={classes.name}>{userData.name}</div>
               <div className={classes.age}>{userData.age}</div>
               <div className={classes.city}>{userData.city}</div>
               <div className={classes.interests}>{userData.interests}</div>
               <div className={classes.about}>{userData.about}</div>
               <div className={classes.photo}>{userData.photo}</div>

            </div>
        </div>
    )
}