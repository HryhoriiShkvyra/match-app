import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './styles/Index.css'
import { MyButton }  from './Components/UI/button/MyButton';
import { MyInput } from './Components/UI/input/MyInput';
import { Time } from './Components/time/time'
import { Profile } from './Pages/Profile/Profile'
import { Settings } from './Pages/Settings/Settings'
 
function App() {

  const list = ([
    { id: 12345678910,
      name: 'Hryhorii',
      age: 22,
      city: 'Kyiv',
    },
    // { id: 2,
    //   name: 'Valerii',
    //   age: 30,
    //   city: 'Lviv',
    // },
    // { id: 3,
    //   name: 'Dmutro',
    //   age: 47,
    //   city: 'Odessa',
    // },
  ])

  const [searchQuery, setSearchQuery] = useState()

  const [btn, setBtn] = useState(false)
  

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
      </div>
    </div>
  );
}

export default App;
