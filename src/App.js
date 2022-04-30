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
import RequireAuth from './components/Auth/RequireAuth';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/events' element={<RequireAuth><Events /></RequireAuth>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/:id' element={<RequireAuth><Register /></RequireAuth>} />
        <Route path='/admin' element={<RequireAuth><Admin /></RequireAuth>} />
        <Route path='/add' element={<RequireAuth><AddEvent /></RequireAuth>} />



      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
