const mongoose = require("mongoose");
const showPost = mongoose.Schema({
  like: { type: Array },
  comment: { type: Array },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
    required: true
  }
});
module.exports = mongoose.model("showPosts", showPost);
