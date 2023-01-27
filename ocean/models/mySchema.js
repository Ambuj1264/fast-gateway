const mongoose=require("mongoose");

const mySchema=new mongoose.Schema({
    consineeName:{
        type:String,
    
    },
    shipperName:{
        type:String,
    }

})

const OceanMaster=mongoose.model("OceanMaster",mySchema);
    module.exports=OceanMaster;
    

