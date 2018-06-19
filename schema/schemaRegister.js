const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const userData = mongoose.Schema({
  avatarSource: { type: String },
  username: { type: String },
  password: { type: String },
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  verificationCode: { type: Number },
  verificationStatus: { type: Boolean, default: false }
});
userData.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userData.methods.validHash = function(pass, dbpass) {
  return bcrypt.compareSync(pass, dbpass);
};
module.exports = mongoose.model("registers", userData);
