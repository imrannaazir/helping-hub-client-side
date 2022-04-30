import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Login from './components/Auth/Login'
import Events from './components/Events/Events';
import Home from './components/Home/Home';
import Register from './components/Register/Register'
import Admin from './components/Admin/Admin'
import AddEvent from './components/AddEvent/AddEvent';
import Footer from './components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/add' element={<AddEvent />} />



      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
