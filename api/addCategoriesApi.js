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
  }
};
