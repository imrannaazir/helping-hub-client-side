import { Route, Routes } from 'react-router-dom';
import './App.css';

import Donation from './components/Donation/Donation';
import Events from './components/Events/Events';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/events' element={<Events />} />



      </Routes>
    </div>
  );
}

export default App;
