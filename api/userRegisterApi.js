const userDB = require("../schema/schemaRegister");
module.exports = {
  addNewUsers: function(data) {
    return new Promise((resolve, reject) => {
      userDB.create(data, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },
  verifyUsers: function(data) {
    return new Promise((resolve, reject) => {
      userDB.find({ email: data }, (error, result) => {
        if (result.length === 0) {
          resolve(result);
        } else {
          resolve(result);
        }
      });
    });
  },
  verifyCode: data => {
    return new Promise((resolve, reject) => {
      userDB
        .findOneAndUpdate(
          {
            $and: [
              { email: data.email, verificationCode: data.verificationCode }
            ]
          },
          { $set: { verificationStatus: true } }
        )
        .then(response => resolve(response))
        .catch(error => {
          console.log("error", error);
          reject(error);
        });
    });
  }
};
