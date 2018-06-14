const UserDB = require("../schema/PostSchema");
module.exports = {
  uploadPost: function(data) {
    return new Promise((resolve, reject) => {
      UserDB.create(data, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  getUploadData: function() {
    return new Promise((resolve, reject) => {
      UserDB.find({}, (err, result) => {
        if (result.length) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }
};
