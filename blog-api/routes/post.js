var express = require("express");
var router = express.Router();

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      Comment.find({ post: req.params.id }).then((comments) =>
        res.render("viewPost", { post, comments })
      );
    })
    .catch((err) => console.err("Cannot find post"));
});

module.exports = router;
