const express = require("express");
const router = express.Router();
const showPostapi = require("../api/showPostapi");
router.get("/post", async (req, res) => {
  try {
    const data = await showPostapi.getPosts();
    if (data.length != 0) {
      console.log("data", data);
      res.send(data);
    }
  } catch (error) {
    console.log("Error are :=", error);
  }
});

module.exports = router;
