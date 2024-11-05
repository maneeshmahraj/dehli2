

const appModel=require("../models/appoinmentModel")
const regiModel=require("../models/registrationModel")

const studentData=async(req,res)=>{
    try {
        const {teacher,date,time,student_name,course}=req.body;
        console.log(student_name);
       const student=await appModel.create({
        teacher:teacher,
        date:date,
        time:time,
         status:false,
         student:student_name,
         course:course
       })
    //   console.log(student)
       res.status(201).json("data insert in backend..")
    } catch (error) {
       console.error("somthing wrong..",error) 
    }
}

const displayData=async(req,res)=>{
    try {
           let username=req.body.username;    
        //  console.log(username)
        await  appModel.find({teacher:username}).then((data)=>{
       res.status(201).json(data);

        })
    } catch (error) {
       console.error("somthing wrong..",error)
        
    }
}
const statusData=async(req,res)=>{
    try {
        let Id=req.body.id
        // console.log(id);
        const responce=await appModel.findByIdAndUpdate(Id,{status:true});
        res.status(201).json(responce.status)
      
    } catch (error) {
       console.error("somthing wrong..",error)
        
    }
}
const statusDataUp=async(req,res)=>{
    try {
        let Id=req.body.id
        // console.log(id);
       await appModel.findByIdAndDelete(Id).then((rs)=>{
        res.status(201).json("Data successfully deleted!! ")
       });
       
      
    } catch (error) {
       console.error("somthing wrong..",error)
        
    }
}
const displayDat=async(req,res)=>{
    try {
        await regiModel.find({role:"teacher"}).then((data)=>{
       res.status(201).json(data);

        })
    } catch (error) {
       console.error("somthing wrong..",error)
        
    }
}

module.exports={
    studentData,
    displayData,
    statusData,
    statusDataUp,
    displayDat
   
}