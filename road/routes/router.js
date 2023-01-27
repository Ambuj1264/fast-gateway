const express=require("express");

const router=express.Router();
const roadController=require("../controller/roadController")
router.get("/road",roadController.get)
router.get("/",roadController.getroad);

router.post("/add",roadController.addroad);

module.exports=router;
