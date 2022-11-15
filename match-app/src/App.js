import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './styles/Index.css'
import { MyButton }  from './Components/UI/button/MyButton';
import { MyInput } from './Components/UI/input/MyInput';
import { Time } from './Components/time/time'
import { Profile } from './Pages/Profile/Profile'
import { Settings } from './Pages/Settings/Settings'
import { RegistrationPage } from './Pages/RegistrationPage/RegistrationPage'
import {useLocalStorage} from './Components/Hooks/useLocalStorage'
import AddToList from './Components/addToList/AddToList';
import { Login } from './Pages/Login/Login';
import useToken from './Components/Hooks/useToken';

  const [userData, setUserData] = useLocalStorage([
  ], 'key')

  const createNewUser = (newUser) => {
    setUserData([...userData, newUser])
    
  }


  // const array = (userData.find(x => x.id === 1668501783625))


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token 

}

function App() {
  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken}/>
  }


  return (
    <div className="App">
      

      <Login userData={userData} setUserDat a={setUserData} create={createNewUser}/>
        {/* <Router>

        {/* <Login data={data} setData={setData} add={createNewValue} /> */}
        {/* <RegistrationPage add={createNewValue}/> */}
        <Router>
          <Link to='/'>
            <i class="fa-solid fa-user"></i>
          </Link>
          <Link to='/Settings'> 
            <i class="fa-solid fa-gear"></i>
          </Link> 

          </Link>

          <Routes>
            <Route path='/' element={<Profile/>}/>
            <Route path='/Settings' element={<Settings/>}/>
          </Routes>
        </Router> */}
    </div>
  );
}

export default App;
