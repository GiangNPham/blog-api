const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
