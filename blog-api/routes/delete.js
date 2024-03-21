var express = require("express");
var router = express.Router();

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

router.post("/post/:id", async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.id });
    const deletedComments = await Comment.deleteMany({ post: req.params.id });
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
});

router.post("/comment/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.findOneAndDelete({
      _id: req.params.id,
    });
    res.redirect("/posts/" + deletedComment.post);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
