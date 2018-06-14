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
  getUploadData: function(data) {
    return new Promise((resolve, reject) => {
      UserDB.find({ userId: data })
        .sort({ _id: -1 })
        .then(response => {
          resolve(response);
        })
        .catch(Error => {
          console.log("error");
        });
    });
  }
};
