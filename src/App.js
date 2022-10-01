import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import { AuthContextProvider } from './context/AuthContext';
import SignUp from './Components/pages/SignUp';
import Account from './Components/pages/Account';
import ProtectedRoute from './Components/pages/ProtectedRoute';

function App() {
  return (
    <>
    <AuthContextProvider>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path='/Account' element={ 
    <ProtectedRoute> 
      <Account/>
    </ProtectedRoute> 
  }
     />
   </Routes>
    </AuthContextProvider>

    </>

  );
}

export default App;
