const mongoose = require("mongoose");
const categoriesDB = mongoose.Schema({
  category: { type: String },
  avatarSource: { type: String }
});
module.exports = mongoose.model("categories", categoriesDB);
