const express = require("express");
const router = express.Router();
const verifyUserApi = require("../api/verifyUserApi");

router.post("/verify", async function(request, response) {
  const verifyData = request.body;

  try {
    const verifyUser = await verifyUserApi.verifyUser(verifyData);

    console.log(verifyUser);
    if (typeof verifyUser == "object") {
      response.status(200).send(verifyUser);
    } else if (verifyUser == "Please enter the correct password") {
      response.send(verifyUser);
    } else {
      response.send(verifyUser);
    }
  } catch (err) {
    console.error("error", err);
  }
});

module.exports = router;
