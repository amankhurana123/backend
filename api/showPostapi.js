const showPosts = require("../schema/showPost");
module.exports = {
  addLikeAndComment: data => {
    return new Promise((resolve, reject) => {
      showPosts

        .create({ data })
        .then(result => {
          console.log("result", result);
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  getpost: data => {
    return new Promise((resolve, reject) => {
      showPosts
        .find({ userId: data.userId })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
