const mailer = require("../schema/schemaRegister");
const nodemailer = require("nodemailer");
module.exports = {
  sendMail: function(data) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "aman1214609@jmit.ac.in",
        pass: "Aman@609aK"
      },
      tls: { rejectUnauthorized: false }
    });

    var mailoption = {
      from: "aman1214609@jmit.ac.in",
      to: data.email,
      subject: "you are sccuessfully log in",
      html: `<h3>Hello, You got the mail for verifications,Your verification code is ${
        data.verificationCode
      }. Please enter the vertication code to confirm your status.</h3>`
    };

    transporter.sendMail(mailoption, function(err, info) {
      console.log("mailer data", data);
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
};
