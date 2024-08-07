const { Router } = require("express");
const { createUser, LoggedIn, deleteUser, resetPassword } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.post("/signup", createUser);
userRouter.post("/login", LoggedIn);
userRouter.delete("/delete", deleteUser);
userRouter.patch("/reset-password", resetPassword);

module.exports = userRouter;
