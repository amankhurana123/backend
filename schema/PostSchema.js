const mongoose = require("mongoose");
const postData = mongoose.Schema({
  postTitle: { type: String },
  avatarSource: { type: String },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true
  }
});
module.exports = mongoose.model("posts", postData);
