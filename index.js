const express = require("express");
const app =express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(8090,()=>{
    console.log("server is running on port 8090");
    // dbConnect();
})