import './App.css';
import React from 'react'
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import UserRegister from './Pages/UserRegister';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserLogin from './Pages/UserLogin';
import UserLandingPage from './Pages/UserLandingPage';
import AdminTrack from './Pages/AdminPanel/AdminTrack';
import AdminSlots from './Pages/AdminPanel/AdminSlots';
import AdminLogin from './AdminComponent/AdminLogin/AdminLogin';

function App() {
  const [data, setData] = React.useState(null);


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<UserLogin/>}/>
      </Routes>
      <Routes>
        <Route  path='/register' element={<UserRegister/>}/>
      </Routes>
      <Routes>
        <Route  path='/home' element={<UserLandingPage/>}/>
      </Routes>
      <Routes>
        <Route  path='/admin/feed' element={<AdminPanel/>}/>
      </Routes>
      <Routes>
      <Route  path='/admin/track' element={<AdminTrack/>}/>
      </Routes>
      <Routes>
      <Route  path='/admin/slots' element={<AdminSlots/>}/>
      </Routes>
      <Routes>
      <Route  path='/admin' element={<AdminLogin/>}/>
      </Routes>
 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
