import React from "react";
import useLocalStorage from "../Components/Hooks/useLocalStorage";

export const Data = () => {

    const [data, setData] = useLocalStorage([{
        name: 'Hryhorii',
        age: '22',
        city: 'Kyiv',
        interests: 'books, walking, philosophy',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti rerum nostrum consequatur ipsum soluta,',
        photo: '',
    }], 'data');

    return(
        <div>
            
        </div>
    );
};

export default Data;