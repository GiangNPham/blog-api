var express = require("express");
var router = express.Router();
require("dotenv").config();
// const session = require("express-session");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  if ((req.body.password = process.env.password)) {
    req.session.regenerate((err) => {
      if (err) next(err);
    });
    req.session.isAuth = true;
    res.redirect("/");
  } else {
    console.log("Wrong password");
  }
});

module.exports = router;
