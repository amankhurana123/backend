const mongoose = require("mongoose");
const showPost = mongoose.Schema({
  like: { type: String },
  comment: { type: String },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "registers",
    required: true
  }
});
module.exports = mongoose.model("showPosts", showPost);
