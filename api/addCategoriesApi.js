const userDB = require("../schema/AddCategoriesSchema");
module.exports = {
  addnew: function(data) {
    return new Promise((resolve, reject) => {
      userDB.create(data, function(error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },
  viewCategories: function() {
    return new Promise((resolve, reject) => {
      userDB.find({}, function(error, result) {
        if (!result.length) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },
  verifyCategory: data => {
    return new Promise((resolve, reject) => {
      userDB.findOne({ category: data }, (error, result) => {
        if (!result) {
          console.log("verify category data,", result);
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
};
