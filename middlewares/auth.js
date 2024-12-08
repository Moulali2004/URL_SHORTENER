const {getUser} = require("../Services/auth");

async function restrictedTOUserOnly(req, res, next) {
    const userUid = req.cookies.uid;

    if(!userUid) return res.render("login", {msg: "Please login to continue"});
    const user = getUser(userUid);

    if(!user) return res.render("login", {
        msg: "Please login to continue"
    });
    req.user = user;
    next();
}

module.exports = {
    restrictedTOUserOnly,
}