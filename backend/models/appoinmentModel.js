const mongoose=require("mongoose");

const appSchema=new mongoose.Schema({

      teacher:
        {
          type:String,
          required:true
        }
      ,
      date:{
        type:String,
        required:true
      },
      time:{
        type:String,
        required:true
      },
      
      status:Boolean,
      student:{
        type:String,
      }
      ,
      course:{
        type:String
      }
     


})
module.exports=mongoose.model("appoinment",appSchema)