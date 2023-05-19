import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user' element={<User/>} />
        </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;