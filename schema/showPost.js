const mongoose = require("mongoose");
const showPost = mongoose.Schema({
  like: { type: Number },
  comment: { type: Array },
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
