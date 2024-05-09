import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Creation from './components/pages/Creation';
import Files from './components/pages/SaveFiles';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/Creation" element ={<Creation/>}/>
          <Route path="/SaveFiles" element ={<SaveFiles/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
