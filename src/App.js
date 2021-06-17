import logo from './logo.svg';
import './app.scss';
import Player from './components/Player/Player';
import Topbar from './components/Topbar/Topbar';
import Menu from './components/Menu/Menu';
import {useState} from 'react'
import Lobby from './components/Lobby/Lobby';
import Search from './components/search/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Upload from './components/Upload/Upload';
import { data } from  './data.js'

function App() {

  const [menuOpen, setMenuOpen] = useState('')
  const d = Date();


  
  return (

    <div className="app">
      <Router>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Switch>
        <Route exact path='/'>
     <div className='sections'>
       <Player /> 
       <Lobby data ={data}/>
      <Search data ={data}/>
      </div>
     </Route>
       <Route exact path="/upload">
         <Upload/>
       </Route>
     </Switch>
    
     </Router>
     
    </div>
  );
}

export default App;
