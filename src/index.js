// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/database.js";

dotenv.config({
    path:'./env'
})
connectDB()

/*
import express from "express";

const app = express();

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
        app.on("error",(error)=>{
            console.log("Errr",error);
            throw error
        })
    }
    catch(e){
        console.error("error:",e);
    }
})()
*/
