import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './styles/Index.css'
import { MyButton }  from './Components/UI/button/MyButton';
import { MyInput } from './Components/UI/input/MyInput';
import { Time } from './Components/time/time'
import { Profile } from './Pages/Profile/Profile'
import { Settings } from './Pages/Settings/Settings'
import { RegistrationPage } from './Pages/RegistrationForm/RegistrationForm'
import useLocalStorage from './Components/Hooks/useLocalStorage';
import AddToList from './Components/addToList/AddToList';
import { Login } from './Pages/Login/Login';
 
function App() {

  const [data, setData] = useLocalStorage('key',[
 
  ])

  

  

  const [searchQuery, setSearchQuery] = useState()

  const [btn, setBtn] = useState(false)
  
  const removeUser = (data) => {
    setData(data.filter(data => data.id !== data.id))
  }
  
  const createNewValue = (newUserLogin) => {
    setData([...data, newUserLogin])
  }
  

  return (
    <div className="App">
      {/* {data.map(datas => 
        <div>
          <div>{datas.name}</div>
          <div>{datas.password}</div>
          <button onClick={() => removeUser(data)}>remove</button>
        </div>
      )} */}

        <Login add={createNewValue}/>
        {/* <RegistrationPage add={createNewValue}/> */}
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
        </Router>
        <div className='menu'>
        
        


        

          <div className='btnFiled'>
            <button onClick={() => setBtn(true)}>hidden btn</button>
            <MyButton >press!</MyButton>
            <MyButton visible={btn} setVisible={setBtn}>press!</MyButton>
          </div>
        </div> */}
    </div>
  );
}

export default App;
