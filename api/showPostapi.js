const showPosts = require("../schema/showPost");
module.exports = {
  addLikeAndComment: data => {
    return new Promise((resolve, reject) => {
      // showPosts.find((error, result) => {
      //   resolve(result);
      // });
      showPosts
        .findByIdAndUpdate(
          { postId: data._id },
          { $set: { like: data.like }, $push: { comment: data.comment } }
        )
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
