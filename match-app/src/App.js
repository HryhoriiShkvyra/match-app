import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './styles/Index.css';
import useLocalStorage from './Components/Hooks/useLocalStorage';
import { Login } from './Pages/Login/Login';
import { Profile } from './Pages/Profile/Profile';
import { Settings } from './Pages/Settings/Settings';
import useToken from './Components/Hooks/useToken';
import Main from './Pages/Main/Main';
import { RegistrationPage } from './Pages/RegistrationPage/RegistrationPage';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token 

}

function App() {

  const [userData, setUserData] = useLocalStorage([], 'key')

  const createNewUser = (newUserLogin) => {
  setUserData([...userData, newUserLogin])
  }



  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken}  create={createNewUser}/>
  }



  return (
    <div className="App">
        <Router>
          <Link to='/'>
            <i class="fa-solid fa-user"></i>
          </Link>
          <Link to='/Settings'> 
            <i class="fa-solid fa-gear"></i>
          </Link>
          <Routes>
            <Route path='/' element={<Profile userData={userData} setUserData={setUserData}/>}/>
            <Route path='/Settings' element={<Settings/>}/>
            <Route path='/RegistrationPage' element={<RegistrationPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
