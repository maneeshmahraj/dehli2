
var express=require("express");
var router=express.Router();
const corseController=require("../controllers/courseController");
const regitController=require("../controllers/registrationController")
const appController=require("../controllers/appoionController")

router.post("/registration",regitController.registrationData)
router.post("/login",regitController.loginData);
router.post("/studata",appController.studentData)
router.post("/getdata",appController.displayData);
router.get("/mgetdata",appController.displayDat);

router.post("/access",appController.statusData);
router.post("/access2",appController.statusDataUp);

router.post("/addCouser",corseController.addCourseDeta);
router.get("/coursedata",corseController.displayCourseData)

module.exports=router;