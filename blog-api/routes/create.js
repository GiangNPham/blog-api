var express = require("express");
var router = express.Router();

const Post = require("../models/postModel");

router.get("/", (req, res) => {
  if (!req.session.isAuth) res.redirect("/");
  else res.render("create", { isAuth: req.session.isAuth });
});

router.post("/", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    author: "GP",
  });
  newPost
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => console.error(err));
});

module.exports = router;
