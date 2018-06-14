const verifyDb = require("../schema/schemaRegister");

module.exports = {
  verifyUser: function(data) {
    return new Promise((resolve, reject) => {
      verifyDb.find(
        { $and: [{ email: data.email }, { password: data.password }] },
        (err, result) => {
          if (result.length === 0) {
            reject(result); //error
          } else {
            resolve(result);
          }
        }
      );
    });
  }
};
