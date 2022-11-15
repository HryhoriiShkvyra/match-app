import React from "react";
import useLocalStorage from "../Components/Hooks/useLocalStorage";

export const userData = () => {

    const [userData, setUserData] = useLocalStorage([{
        name: 'Hryhorii',
        age: '22',
        city: 'Kyiv',
        interests: 'books, walking, philosophy',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti rerum nostrum consequatur ipsum soluta,',
        photo: '',
    }]);

    return(
        <div>
            {}
        </div>
    );
};