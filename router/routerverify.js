const express = require("express");
const router = express.Router();
const verifyUserApi = require("../api/verifyUserApi");

router.post("/verify", async function(request, response) {
  const verifyData = request.body;

  try {
    const verifyUser = await verifyUserApi.verifyUser(verifyData);
    if (verifyUser.length != 0) {
      console.log("you will sccuesfully login", verifyUser);
      response.status(200).send(verifyUser);
    }
  } catch (err) {
    console.error("error", err);
  }
});
module.exports = router;
