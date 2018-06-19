const express = require("express");
const router = express.Router();
const userRegisterApi = require("../api/userRegisterApi");
const mailerapi = require("../api/mailerapi");
const multer = require("multer");
const users = require("../schema/schemaRegister");
const userss = new users();
let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.log("file", file);
    cb(null, "upload");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
let upload = multer({ storage: storage });

router.post(
  "/create",
  upload.single("avatarSource"),
  async (request, response, next) => {
    // console.log("create user..................", request.body, request.file);

    const user = request.body;
    user.password = userss.generateHash(user.password);
    user.avatarSource = request.file.filename;
    user.verificationCode = Math.floor(Math.random() * 1000000);
    console.log("user", user);
    try {
      const verifyUsers = await userRegisterApi.verifyUsers(user.email);
      if (verifyUsers.length === 0) {
        const createData = await userRegisterApi.addNewUsers(user);
        const mail = await mailerapi.sendMail(user);
        console.log("create user", createData);
        response.send(createData);
      } else {
        console.log("UserName or email will already exists");
        response.send("UserName or email will already exists");
      }
    } catch (err) {
      console.log({ Error: err });
    }
  }
);
router.post("/verifyCode", async (req, res) => {
  const userData = req.body;
  console.log("verifyCode", userData);
  try {
    const dataBack = await userRegisterApi.verifyCode(userData);
    if (dataBack) {
      response.send(dataBack);
    }
  } catch (error) {}
});
router.post("/resendCode", async (req, res) => {
  const userData = req.body;

  userData.verificationCode = Math.floor(Math.random() * 1000000);

  try {
    const verifyUsers = await userRegisterApi.verifyCodeResend(userData);
    if (verifyUsers.length != 0) {
      const mail = await mailerapi.sendMail(userData);
      console.log("mail", mail);
      res.send("mail is sent");
    }
  } catch (error) {
    console.log("userData", userData);
  }
});
module.exports = router;
