const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },

  // //   a post will have an array of comment -> find and list the comments by looking up the objectID
  // comment: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Comment",
  //   },
  // ],
});

module.exports = mongoose.model("Post", postSchema);
