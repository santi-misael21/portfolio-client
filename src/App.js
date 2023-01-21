// import logo from './logo.svg';
import './App.css';
import './styles/nav_sup.css';
import Navsup from './compons/00-Nav_Sup';
import { useState } from 'react';

function App() {

  let [enter, setEnter] = useState(false)

  return (
    <div className="App" >
      <div onMouseEnter={()=>setEnter(true)}>
        <Navsup ent={enter}/>
      </div>
      <div className='resto' onClick={()=>setEnter(false)}> 
      </div>
    </div>
  );
}

export default App;
