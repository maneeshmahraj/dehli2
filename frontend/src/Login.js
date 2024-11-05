import React from 'react'
import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [mydata,setMydata]=useState({});
  const navigate=useNavigate();
  const handlInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));
 
 }
  const handlsubmit=()=>{
let api="http://localhost:8000/stuinfo/login";
axios.post(api,mydata).then((res)=>{
 window.localStorage.setItem("token",res.data.token);
 window.localStorage.setItem("userrole",res.data.userrole);
 window.localStorage.setItem("username",res.data.username)

alert(res.data.massage);
if(res.data.massage==="plz enter valid password")
  {
    navigate("/registration")
  }
 else if(res.data.userrole=="student")
  {
   navigate("../student");
  }
  else 
  {
    navigate("../teacher")
  }
  
})
    
  }
  return (
    <>
     <div className="registration">
          <div className="registor">
            <h2 style={{display:"flex", justifyContent:"center"}}>Login</h2>
         
          <label for="email">Enter email:</label>
          <input type="email"  name="email" onChange={handlInput}/>
          <label for="password">Enter password:</label>
          <input type="password"  name="password" onChange={handlInput}/>
         
           <button className="datasave" onClick={handlsubmit}>Login</button>
          </div>
       </div>
    </>
  )
}

export default Login