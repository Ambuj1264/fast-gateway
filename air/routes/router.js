const express=require("express");

const router=express.Router();
const airController=require("../controller/airController");

router.get("/air",airController.get)
router.get("/",airController.getAir);

router.post("/add",airController.addAir);

module.exports=router;
