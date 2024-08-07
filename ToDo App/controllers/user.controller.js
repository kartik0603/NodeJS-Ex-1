const User = require("../models/User.schema");

// Create a new user
const createUser = async (req, res) => {
    let { email } = req.body;
    console.log(req.body);

    let isUser = await User.findOne({ email: email });

    if (isUser) {
        res.send({ message: "User already exists" });
    } else {
        await User.create(req.body);
        res.redirect('/user/login');
    }
};

// Log in a user
const LoggedIn = async (req, res) => {
    let { email, password } = req.body;
    let isUser = await User.findOne({ email: email });
    console.log("isUser" + isUser);

    if (!isUser) {
        return res.send({ message: "User not found" });
    }

    if (isUser.password !== password) {
        return res.send({ message: "Password is Incorrect" });
    }
    res.send({ message: "Logged In Successfully" });
};

// Delete a user
const deleteUser = async (req, res) => {
    let { email } = req.body;

    let isUser = await User.findOne({ email: email });

    if (!isUser) {
        return res.send({ message: "User not found" });
    }

    await User.deleteOne({ email: email });
    res.send({ message: "User deleted successfully" });
};

// Reset password
const resetPassword = async (req, res) => {
    let { email, newPassword } = req.body;

    let isUser = await User.findOne({ email: email });

    if (!isUser) {
        return res.send({ message: "User not found" });
    }

    isUser.password = newPassword;
    await isUser.save();
    res.send({ message: "Password reset successfully" });
};

module.exports = { createUser, LoggedIn, deleteUser, resetPassword };
