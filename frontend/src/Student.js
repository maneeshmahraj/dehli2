import axios from 'axios';
import { useEffect, useState } from 'react'
import { isAuthenticated} from './utils/auth';
import { Navigate } from 'react-router-dom';
const username=window.localStorage.getItem("username")
const Student = () => {

  const [mydata,setMydata]=useState({});
   const [teacher,setTeacher]=useState([]);
   const [cous,setCous]=useState([])
    const loadData=()=>{
      let api="http://localhost:8000/stuinfo/mgetdata";
      axios.get(api).then((res)=>{
        setTeacher(res.data)
         
      })
    }
const courseData=()=>{
  let api="http://localhost:8000/stuinfo/coursedata";
      axios.get(api).then((res)=>{
        setCous(res.data)
         //console.log(res.data)
      })
}
    useEffect(()=>{
      loadData()
      courseData()
    },[])
   
     //console.log(mydata)
  const handlInput=(e)=>{
    
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));
  }
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  const handlSubmit=()=>{
     let api="http://localhost:8000/stuinfo/studata";
     axios.post(api,{teacher:mydata.teacher,date:mydata.date,time:mydata.time,student_name:username,course:mydata.course}).then((res)=>{
      alert(res.data);
       loadData()

     })
  }
  

// const ans=teacher.map((key)=>{
//            return(
//             <>
//             <p>{key.username}</p>
//             </>
//            )
//     })
    const ans=cous.map((key)=>{
           return (
            <>
            <option>{key.course}</option>
            </>
           )
    })
  return (

    <>
    <div className="registration">
    <div className="registor">
      <h2 style={{display:"flex", justifyContent:"center"}}> appointment </h2>
    
    
    <label for="teacher">Select Teacher:</label>
    <select name='teacher'  onChange={handlInput}>
       <option value="ajay">ajay sir</option>
      <option value="deepak" >deepak sir</option>
      <option value="mohan" >mohan sir</option>
       <option value="vikas" >vikas sir</option>
    </select>  
    <label for="date">Select Date:</label>
    <input type='date' name='date' onChange={handlInput}/>
    <label for="teacher">Enter Time:</label>
    <input type='time' name='time' onChange={handlInput}/>
    <select name='course'  onChange={handlInput}>
       <option value="java">java</option>
      <option value="python" >python</option>
      <option value="math" >math</option>
       <option value="science" >science</option>
       {ans}
    </select> 
     <button className="datasave" onClick={handlSubmit}>appointment</button>
    </div>
 </div>
 
     
    </>

  )
}

export default Student;