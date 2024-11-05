
const courseModel= require("../models/courseModel");

const addCourseDeta=async(req,res)=>{
   try {
    const {course,username}=req.body
   //  console.log(course," ",username)
   let cor=await courseModel.create({
      teacher:username,
      course:course
   })
    res.json("course updated!!")

   } catch (error) {
      console.error("somthing wrong..",error)
       
   }
}

const displayCourseData=async(req,res)=>{
   await courseModel.find().then((dt)=>{
      res.status(201).json(dt)
   })
}

module.exports={
   addCourseDeta,
   displayCourseData
}