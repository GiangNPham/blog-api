var express = require("express");
var router = express.Router();

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      Comment.find({ post: req.params.id }).then((comments) =>
        res.render("viewPost", { post, comments, id: req.params.id })
      );
    })
    .catch((err) => console.error("Cannot find post"));
});

router.post("/:id", (req, res) => {
  // console.log(req.params);
  const newComment = new Comment({
    author: req.body.author,
    content: req.body.content,
    post: req.params.id,
  });
  newComment
    .save()
    .then(() => res.redirect("/posts/" + req.params.id))
    .catch((err) => console.error(err));
});

module.exports = router;
