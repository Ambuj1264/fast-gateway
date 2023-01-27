const express =require("express")
const app=express();
const port =8002;
const db=require("./db/db")
var cors = require('cors');
app.use(cors());
const router=require("./routes/router");
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.listen(`${port}` ,()=>{

    console.log("you are listening on ",port )

})