import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vendedores from './views/Vendedores';
import Login from './views/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Encargados from './views/Encargados';
import NavBar from './components/NavBar';
import UserContext from './context/UserContext';


function App() {

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if(userData){
      setUser(userData)
    }
  }, [])

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<Vendedores />} />
              <Route path='/encargados' element={<Encargados />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider> 
  );
}

export default App;
