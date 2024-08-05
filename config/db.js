 const mongoose= require("mongoose");
 const dotnev =require("dotenv");


 dotnev.config();

 const dbConnect = async ()=>{

 await mongoose.connect(process.env.DB_URL); 
    console.log("connect with database");
    
 }

  module.exports =dbConnect;