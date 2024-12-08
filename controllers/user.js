const User = require("../models/user");
const {setUser} = require("../Services/auth");
const URL = require("../models/url");

async function handleUserSignup(req, res) {
    const {name, email, password} = req.body;
    User.create({
        name,
        email,
        password,
    });

    return res.render("home");
}

async function handleUserLogin(req, res) {
    const {email, password} = req.body;
    const user = await User.findOne({email, password});

    if(!user) {
        return res.render("login", {
            error: "Username or password is incorrect",
        })
    }
    
    const token = setUser(user);
    res.cookie("uid", token);
    res.render("home");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}