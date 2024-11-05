import React from 'react'
import { FaBars } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
     
    const navigate=useNavigate();

    
  const logout=()=>{
    localStorage.clear()
    navigate("login")
    // window.location.href = '/login';
  }
  return (
    <>
    <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
            
            <FaBars className="fa fa-bars" />
        </label>
        <label className="logo">Task</label>
        <ul>
                      
            
            <li><Link to="registration" className='link'>Registration</Link></li>
            <li><Link to="login"className='link'>Login</Link></li>
           
            <li><a href='' className='link1' onClick={logout}>Logout</a></li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout