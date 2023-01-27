const express=require("express");

const router=express.Router();
const oceanController=require("../controller/oceanConntroller");

router.get("/",oceanController.getocean);
router.get("/ocean",oceanController.get)
router.post("/add",oceanController.addocean);

module.exports=router;
