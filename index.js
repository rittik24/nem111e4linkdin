const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const app=express();
const cors= require("cors");
const { router } = require("./routes/allroutes");
app.use(express.json());

app.use("/",router)


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to DB")     
    }catch(err){
        console.log(err)
        console.log("DB not connected")
    }
    console.log(`server is running at port ${process.env.port}`)
})