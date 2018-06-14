const mongoose = require("mongoose");
const userData = mongoose.Schema({
  avatarSource: { type: String },
  username: { type: String },
  password: { type: String },
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String }
});
module.exports = mongoose.model("registers", userData);
