const mongoose = require("mongoose");
const showPost = mongoose.Schema({
  like: { type: String },
  comment: { type: String },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
    required: true
  }
});
module.exports = mongoose.model("showPosts", showPost);
