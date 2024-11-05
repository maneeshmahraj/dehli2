
var mongoose =require("mongoose");

const stuSchema=new mongoose.Schema({
   teacher:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
    
})
module.exports=mongoose.model("joy",stuSchema);