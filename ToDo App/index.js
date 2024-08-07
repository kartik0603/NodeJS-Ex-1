const express = require("express");
const dbConnect = require("./config/db");
const userRouter = require("./routes/user.route");
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});
app.use("/user", userRouter);


app.get("/user/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html')); 
});
app.get("/user/signup", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signup.html')); 
});
app.get("/user/forgot-password", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/forgot-password.html')); 
});
app.get("/user/reset-password", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/reset-password.html')); 
});

app.listen(8088, () => {
    console.log("On Port 8088");
    dbConnect();
});
