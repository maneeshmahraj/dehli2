
import axios from 'axios';
import { useState, useEffect  } from 'react'
import { isAuthenticated} from './utils/auth';
import { Navigate } from 'react-router-dom';
const username=window.localStorage.getItem("username")
const Teacher = () => {   
  
  const [info,setInfo]=useState([])
  const [show,setShow]=useState(false);
  const [course,setCourse]=useState("")
  const [add,setAdd]=useState(false)
const loadData=()=>{
let api="http://localhost:8000/stuinfo/getdata";

axios.post(api,{username:username}).then((res)=>{
  setInfo(res.data);
//  console.log(res.data)

})
}
 
useEffect(()=>{
    loadData();
},[])
const confirmHandle=(id)=>{
    let api="http://localhost:8000/stuinfo/access";
    axios.post(api,{id:id}).then((res)=>{
     alert(res.data);
     setAdd(!add)
    })
}
const confirmHandle2=(id)=>{
  let api="http://localhost:8000/stuinfo/access2";
  axios.post(api,{id:id}).then((res)=>{
   alert(res.data);
  loadData();
  })
}
const handleAdd=(e)=>{
let vl=e.target.value;
setCourse(vl)


}

const hndleBook=()=>{
  let api="http://localhost:8000/stuinfo/addCouser";
  axios.post(api,{course:course,username:username}).then((res)=>{
   alert(res.data)
  })
} 
const ans=info.map((key)=>{

  return(
    <>
    <div>
     <b> Teacher:</b>  <span style={{color:"purple",fontSize:"20px"}}>{username}</span>
        <br/>
        <b>Date:</b>  <span style={{color:"purple",fontSize:"20px"}}>{key.date}</span>
        <br/>
        <b>Time:</b>  <span style={{color:"purple",fontSize:"20px"}}>{key.time}</span>
        <br/>
        <b>Student:</b>  <span style={{color:"purple",fontSize:"20px"}}>{key.student}</span>
        <br/>
        <b>Course:</b>  <span style={{color:"purple",fontSize:"20px"}}>{key.course}</span>
        <br/>
     {!add?<p><button className='btn-confirm' onClick={()=>{confirmHandle(key._id)}}>Add Course</button></p>:""}
    
     {add?  <p><button className='btn-confirm' onClick={()=>{confirmHandle2(key._id)}}>Delete</button></p>:""}
       {add?<input type='text' className='inpt-course' placeholder='Enter Course name..' onChange={handleAdd}/>:""}
       <br/>
       {add?<button className='course-btn' onClick={hndleBook}>save</button>:""}
    </div>
    </>
  )
})
if (!isAuthenticated()) {
  return <Navigate to="/login" />;
}

const handlTeacher=(e)=>{
  let name=e.target.name;
  if(name==username){
    setShow(!show)
  }
}
  return (
   <>

   <div className="data-show" style={{marginTop:"100px"}}>  
    <h2 className='heading-teacher'>Teacher deshbord</h2>
    <div className='tch'>
    
    <button name='ajay' onClick={handlTeacher}>ajay{username=="ajay"? <span className='tc'>{info.length}</span>:""}</button>
     <button name='deepak' onClick={handlTeacher} >deepak sir {username=="deepak"?<span className='tc' >{info.length}</span>:""}</button>  
     <button name='mohan' onClick={handlTeacher}>mohan sir{username=="mohan"?<span className='tc'>{info.length}</span>:""}</button>
     <button name='vikas' onClick={handlTeacher}>vikas sir{username=="vikas"?<span className='tc'>{info.length}</span>:""}</button>

    </div>
    
      {show? <div>{ans}</div>:""}
     </div>
   </>
  )
}

export default Teacher;