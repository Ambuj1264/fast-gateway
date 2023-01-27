const RoadMaster=require("../models/mySchema");


const roadController={
get:async(req,res)=>{
    res.send("hello road")
},
getroad:async(req,res)=>{
    const oceanMaster=await RoadMaster.find();
    res.json(oceanMaster);


},

addroad :async(req,res)=>{
    const oceanMaster=new RoadMaster({
        consineeName:req.body.consineeName,
        shipperName:req.body.shipperName

    });
    oceanMaster.save()
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json(err)
    })
}
}
module.exports=roadController;
