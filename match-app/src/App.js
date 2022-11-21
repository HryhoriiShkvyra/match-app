import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './styles/Index.css';
import useLocalStorage from './Components/Hooks/useLocalStorage';
import { Login } from './Pages/Login/Login';
import { Profile } from './Pages/Profile/Profile';
import { Settings } from './Pages/Settings/Settings';
import useToken from './Components/Hooks/useToken';
import { RegistrationPage } from './Pages/RegistrationPage/RegistrationPage';
import { Chat } from './Pages/Chat/Chat'
import { Main } from './Pages/Main/Main'
import { Events } from './Pages/Events/Events'
import { Match } from './Pages/Match/Match'

import IMG2  from './assets/img2.jpg' 
import IMG3  from './assets/img3.jpg' 
import IMG4  from './assets/img4.jpg' 
import IMG5  from './assets/img5.jpg' 
import IMG6  from './assets/img6.jpg' 


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token 

}



function App() {

  const [userData, setUserData] = useLocalStorage([
    {id: 1, 
      name: 'Andrei', 
      password: '12345678', 
      age: 22,
      verification: true,
      photo: '', 
      
      
      // about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis provident amet, harum id itaque reprehenderit sapiente a inventore autem similique! Corrupti ab eligendi eveniet earum, temporibus accusantium in id sint, incidunt commodi magni iste odit, dolorum labore numquam minus dolor? Voluptatum consequatur dolorem nisi iste ipsa asperiores nemo hic?'
    },
    {id: 2, 
      name: 'Marichka', 
      password: '12345678', 
      age: 29,
      verification: true,
      photo: IMG2, 
      
      
      // about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis provident amet, harum id itaque reprehenderit sapiente a inventore autem similique! Corrupti ab eligendi eveniet earum, temporibus accusantium in id sint, incidunt commodi magni iste odit, dolorum labore numquam minus dolor? Voluptatum consequatur dolorem nisi iste ipsa asperiores nemo hic?'
    },
    {id: 3, 
      name: 'Sasha', 
      password: '12345678', 
      age: 26,
      verification: true,
      photo: IMG3, 
      
      
      // about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis provident amet, harum id itaque reprehenderit sapiente a inventore autem similique! Corrupti ab eligendi eveniet earum, temporibus accusantium in id sint, incidunt commodi magni iste odit, dolorum labore numquam minus dolor? Voluptatum consequatur dolorem nisi iste ipsa asperiores nemo hic?'
    },
    {id: 4, 
      name: 'Hanna', 
      password: '12345678', 
      age: 40,
      verification: true,
      photo: IMG4, 
      
      
      // about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis provident amet, harum id itaque reprehenderit sapiente a inventore autem similique! Corrupti ab eligendi eveniet earum, temporibus accusantium in id sint, incidunt commodi magni iste odit, dolorum labore numquam minus dolor? Voluptatum consequatur dolorem nisi iste ipsa asperiores nemo hic?'
    },
    {id: 5, 
      name: 'Lesia', 
      password: '12345678', 
      age: 35,
      verification: true,
      photo: IMG5, 
      
      
      // about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis provident amet, harum id itaque reprehenderit sapiente a inventore autem similique! Corrupti ab eligendi eveniet earum, temporibus accusantium in id sint, incidunt commodi magni iste odit, dolorum labore numquam minus dolor? Voluptatum consequatur dolorem nisi iste ipsa asperiores nemo hic?'
    },
    {id: 6, 
      name: 'Melania', 
      password: '12345678', 
      age: 42,
      verification: true,
      photo: IMG6, 
      
      
      // about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis provident amet, harum id itaque reprehenderit sapiente a inventore autem similique! Corrupti ab eligendi eveniet earum, temporibus accusantium in id sint, incidunt commodi magni iste odit, dolorum labore numquam minus dolor? Voluptatum consequatur dolorem nisi iste ipsa asperiores nemo hic?'
    },
  
  ], 'key')
  const createNewUser = (newUserLogin) => {
  setUserData([...userData, newUserLogin])
  }




  const [activePage, setActivePage] = useState('#')

  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken}  create={createNewUser}/>
  }





  return (
    <div className="App">
      

        <Router>
          <div className='menu'>
            <Link onClick={() => setActivePage('#')} className={activePage === '#' ? 'active' : 'menuBtn'} to='/'>
              <i class="fa-solid fa-fire"></i>
            </Link>
            <Link onClick={() => setActivePage('event')} className={activePage === 'event' ? 'active' : 'menuBtn'} to='/Events'>
              <i class="fa-solid fa-magnifying-glass-location"></i>
            </Link>
            <Link onClick={() => setActivePage('match')} className={activePage === 'match' ? 'active' : 'menuBtn'} to='/Match'>
              <i class="fa-solid fa-wine-bottle"></i>
            </Link>
            <Link onClick={() => setActivePage('chat')} className={activePage === 'chat' ? 'active' : 'menuBtn'} to='/Chat'>
              <i class="fa-solid fa-comments"></i>
            </Link>
            <Link onClick={() => setActivePage('profile')} className={activePage === 'profile' ? 'active' : 'menuBtn'} to='/Profile'> 
              <i class="fa-solid fa-user"></i>
            </Link>
          </div>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/Events' element={<Events/>}/>
            <Route path='/Match'  element={<Match userData={userData} setUserData={setUserData}/>}/>
            <Route path='/Chat' element={<Chat/>}/>
            <Route path='/Profile' element={<Profile userData={userData} setUserData={setUserData}/>}/>1

            <Route path='/Settings' element={<Settings/>}/>
            <Route path='/RegistrationPage' element={<RegistrationPage/>}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
