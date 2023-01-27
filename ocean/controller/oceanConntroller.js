const OceanMaster=require("../models/mySchema");


const oceanController={
get:async(req,res)=>{
    res.send("hello ocean")
},
getocean:async(req,res)=>{
    const oceanMaster=await OceanMaster.find();
    res.json(oceanMaster);


},

addocean :async(req,res)=>{
    const oceanMaster=new OceanMaster({
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
module.exports=oceanController;
