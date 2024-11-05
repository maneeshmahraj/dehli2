
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

import Layout from './Layout';
import Registration from './Registration';

import Login from './Login';
import Student from './Student';
import Teacher from './Teacher';
import { isAuthenticated } from './utils/auth'

const App=()=> {
    
  return (
   <>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Registration/>}/>
    <Route path="registration" element={<Registration/>}/>
    <Route path='login' element={isAuthenticated()?<Navigate to="/student" />:<Login/>}/>
    <Route path='student' element={<Student/>}/>
    <Route path='login' element={isAuthenticated()?<Navigate to="/teacher" />:<Login/>}/>
    <Route path='teacher' element={<Teacher/>}/>
    
       
    </Route>
</Routes>
</BrowserRouter>

  </>
  );
}

export default App;
