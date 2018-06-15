const express = require("express");
const router = express.Router();
const showPost = require("../api/showPostapi");
router.post("/post", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const post = await showPost.addLikeAndComment(req.body);
    if (post.length) {
      console.log(post);
      res.send("'response send");
    }
  } catch (errot) {
    console.log("error", error);
  }
});
module.exports = router;
