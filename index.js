const express = require('express');
const {connectDB} = require('./connection');
const URL = require("./models/url");
const CookieParser = require("cookie-parser");
const path = require('path');
const { restrictedTOUserOnly } = require("./middlewares/auth");

const urlRouter = require("./routes/url");
const StaticRoute = require("./routes/StaticRouter");
const UserRoute = require("./routes/user");
const User = require('./models/user');

const app = express();
const port = 3000;

connectDB("mongodb://127.0.0.1:27017/Url-Shortener-app").then(() => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended: false}));
app.use(CookieParser());

app.use("/url", restrictedTOUserOnly, urlRouter);
app.use("/user", UserRoute);
app.use("/",  StaticRoute);

app.get("/:id", async (req, res) => {
    const shortid = req.params.id;
    const db = await URL.findOne({shortUrl: shortid});
    await URL.findOneAndUpdate({
        shortUrl: shortid,
    }, {
        $push: {
            clickHistory: {
                timestamp: Date.now(),
            }
        }
    });
    if(db) res.redirect(db.redirectUrl);
    else res.status(404).json({err:"Error Message"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})