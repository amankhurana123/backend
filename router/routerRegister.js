const express = require("express");
const router = express.Router();
const userRegisterApi = require("../api/userRegisterApi");
const mailerapi = require("../api/mailerapi");
const multer = require("multer");
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
router.post("/test", (req, res) => {
  res.send("post test called");
});
router.post(
  "/create",
  upload.single("avatarSource"),
  async (request, response, next) => {
    // console.log("create user..................", request.body, request.file);
    const user = request.body;

    user.avatarSource = request.file.filename;
    console.log("user", user);
    try {
      const verifyUsers = await userRegisterApi.verifyUsers(user.email);
      if (verifyUsers.length === 0) {
        const createData = await userRegisterApi.addNewUsers(user);
        const mail = await mailerapi.sendMail(request.body.email);
        console.log("response", createData);
        response.send(createData);
      } else {
        response.send("UserName or email will already exists");
      }
    } catch (err) {
      console.log({ Error: err });
    }
  }
);
module.exports = router;
