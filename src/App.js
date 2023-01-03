import './App.css';
import { useSelector } from 'react-redux';
import {Route , Routes} from 'react-router-dom'
import PreLanding from './pages/PreLanding/preLanding';
import LandingPage from './pages/LandingPage/landingPage';
import Home from './pages/home/Home';


function App() {
  const{name}= useSelector(state=> state)
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path='/' element={<PreLanding/>}/>
        <Route path='/landing' element={name === 'Nahuel Cempellin'? <Home/> : <LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
