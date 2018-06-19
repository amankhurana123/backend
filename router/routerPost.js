const express = require("express");
const uploadapi = require("../api/uploadapi");
const router = express.Router();
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});
let upload = multer({ storage: storage });
router.post("/create", upload.single("avatarSource"), async (req, res) => {
  const post = req.body;
  post.avatarSource = req.file.filename;
  p;
  console.log("post is", post);
  try {
    const upload = await uploadapi.uploadPost(post);
    res.send(upload);
    console.log(upload);
  } catch (error) {
    console.log("Error is :-", error);
  }
});
router.get("/show", async (req, res) => {
  console.log("req.parrams", JSON.parse(req.query.params));
  try {
    const data = await uploadapi.getUploadData(JSON.parse(req.query.params));
    if (data.length) {
      console.log("user post", data);
      res.send(data);
    }
  } catch (error) {
    console.log("error is:-", error);
  }
});
module.exports = router;
