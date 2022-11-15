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
 
function App() {

  const [userData, setUserData] = useLocalStorage([
  ], 'key')

  const createNewUser = (newUser) => {
    setUserData([...userData, newUser])
    
  }


  // const array = (userData.find(x => x.id === 1668501783625))


  return (
    <div className="App">
      

      <Login userData={userData} setUserDat a={setUserData} create={createNewUser}/>
        {/* <Router>
          <Link to='/'>
            <i class="fa-solid fa-user"></i>
          </Link>
          <Link to='/Settings'> 
            <i class="fa-solid fa-gear"></i>
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
