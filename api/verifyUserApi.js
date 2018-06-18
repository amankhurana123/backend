const verifyDb = require("../schema/schemaRegister");
const user = new verifyDb();

module.exports = {
  verifyUser: function(data) {
    return new Promise((resolve, reject) => {
      verifyDb
        .findOne({ email: data.email })
        .then(response => {
          if (
            user.validHash(data.password, response.password) &&
            response.verificationStatus == true
          ) {
            resolve(response);
          } else if (
            user.validHash(data.password, response.password) &&
            response.verificationStatus == false
          ) {
            resolve("You are not authoried user.");
          } else {
            resolve("Please enter the correct password");
          }
        })
        .catch(error => {
          resolve("Please enter the correct email");
        });
    });
  }
};
