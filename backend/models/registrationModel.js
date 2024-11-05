const mongoose=require("mongoose");

const registrationSchem=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   residence:{
        type:String
       
    },
   gender:{
    type:String
   },
    role:{
        type:String,
        required:true
    }
   
})
module.exports=mongoose.model("registration",registrationSchem)