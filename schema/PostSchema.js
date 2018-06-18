const mongoose = require("mongoose");
const postData = mongoose.Schema({
  postTitle: { type: String },
  avatarSource: { type: String },
  postDiscription: { type: String },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "registers",
    require: true
  }
});
module.exports = mongoose.model("posts", postData);
