const express = require("express");
const router = express.Router();
const showPost = require("../api/showPostapi");
router.post("/post", async (req, res) => {
  const postData = req.body;
  console.log("postData", postData);
  try {
    const post = await showPost.addLikeAndComment(postData);
    if (post.length) {
      console.log("post", post);
      res.send("'response send");
    }
  } catch (errot) {
    console.log("error", error);
  }
});
router.get("/show", async (req, res) => {
  console.log("req.params in show post", JSON.parse(req.query.params));
  try {
    const data = await showPost.getpost(JSON.parse(req.query.params));
    if (data.length) {
      console.log(data);
      res.send(data);
    } else {
      console.log("data not found", data);

      res.send("data not found");
    }
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = router;
