import React from "react";
import { useState } from "react";



const AddToList = ({add}) => {

    const [userLogin, setUserLogin] = useState({name:'', password: ''});

    const addNewItem = (e) => {
        e.preventDefault();
        const newUserLogin = {
            ...userLogin, id: Date.now()

        }
        add(newUserLogin)
        setUserLogin({name: '', password: ''})
        console.log(addNewItem)
    }


    return(
        <div>
            <form>
                <input
                    value={userLogin.name}
                    onChange={e => setUserLogin({...userLogin, name: e.target.value})}
                    placeholder="enter Login"
                    type='text'
                />
                <input
                    value={userLogin.password}
                    onChange={e => setUserLogin({...userLogin, password: e.target.value})}
                    placeholder="enter Password"
                    type='password'
                />
                <button onClick={addNewItem}>Login</button>
            </form>
        </div>
    )
}

export default AddToList;