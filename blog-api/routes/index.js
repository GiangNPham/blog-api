var express = require("express");
var router = express.Router();

const Post = require("../models/postModel");

router.get("/", function (req, res, next) {
  Post.find()
    .then((allPosts) => {
      res.render("index", { title: "BlogAPI", allPosts });
    })
    .catch((err) => console.err("Cannot get posts"));
});

module.exports = router;
