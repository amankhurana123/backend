const showPosts = require("../schema/showPost");
module.exports = {
  getPosts: () => {
    return new Promise((resolve, reject) => {
      showPosts.find((error, result) => {
        resolve(result);
      });
    });
  }
};
