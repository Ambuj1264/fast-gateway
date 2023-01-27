const mongoose=require("mongoose");

const mySchema=new mongoose.Schema({
    consineeName:{
        type:String,
    
    },
    shipperName:{
        type:String,
    }

})

const RoadMaster=mongoose.model("RoadMaster",mySchema);
    module.exports=RoadMaster;
    

