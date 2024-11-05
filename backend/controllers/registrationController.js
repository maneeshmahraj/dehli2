
const registModel=require("../models/registrationModel")
const jwt=require("jsonwebtoken");
const bcryt=require("bcryptjs");
const secret_key="mk123";
const registrationData=async(req,res)=>{
    try {
       const {username,mobilenumber,email,password,residence,r1,role}=req.body
       const hashPassword=await bcryt.hash(password,10)
       const regData=await registModel.create({
        username:username,
        mobileno:mobilenumber,
        email:email,
        password:hashPassword,
        residence:residence,
        gender:r1,
        role:role
       
       })
    //    console.log(regData)
       res.status(201).send("registration successfully done!!")
    } catch (error) {
        console.error("somthing happend wrong!!",error)
    }
}
const loginData=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await registModel.findOne({email})
        const isValidPassword=await bcryt.compare(password,user.password);
        // console.log(isValidPassword)
        if(isValidPassword)
        {
             const token=await jwt.sign({userId:user._id,username:user.username,email:user.email},secret_key);
             res.status(201).json({token:token,userrole:user.role,username:user.username,email:user.email,massage:"you r loged in !!"})
        }
        else{
            res.json({massage:"plz enter valid password"})
        }

    } catch (error) {
        console.error("somthing happend wrong!!",error)
    }
}


module.exports={
    registrationData,
    loginData
}