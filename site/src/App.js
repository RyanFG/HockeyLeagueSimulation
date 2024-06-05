import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Creation from './components/pages/Creation';
import SaveFiles from './components/pages/SaveFiles';
import GameHome from './components/pages/GameHome';
import ConfDivSetup from './components/pages/ConfDivSetup';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/Creation" element ={<Creation/>}/>
          <Route path="/ConfDivSetup" element ={<ConfDivSetup/>}/>
          <Route path="/SaveFiles" element ={<SaveFiles/>}/>
          <Route path="/GameHome" element ={<GameHome/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
