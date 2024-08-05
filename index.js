const express = require("express");
const dotenv =require('dotenv');
const cors = require('cors');

const dbConnect = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
dbConnect();
const app =express();
app.use(cors());
app.use(express.json());
  

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(8090,()=>{
    console.log("server is running on port 8090");
    dbConnect();
})