const express = require("express");
const router = express.Router();
const addCategoriesApi = require("../api/addCategoriesApi");
const multer = require("multer");
let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./upload");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
let upload = multer({ storage: storage });
router.post("/add", upload.single("avatarSource"), async function(
  request,
  response
) {
  const userData = request.body;
  console.log("userData", userData);
  console.log("requestFile", request.file);
  userData.avatarSource = request.file.originalname;
  console.log("user", userData);
  try {
    const data = await addCategoriesApi.addnew(userData);
    console.log("add Categories", data);
    const dataget = await addCategoriesApi.viewCategories();
    console.log("data", dataget);
    response.send(dataget);
  } catch (err) {
    console.log(err);
    response.send(err);
  }
});
router.get("/view", async (req, res) => {
  try {
    const categories = await addCategoriesApi.viewCategories();
    if (categories.length != 0) {
      console.log("categories", categories);
      res.send(categories);
    }
  } catch (error) {
    console.log("Error", error);
  }
});

module.exports = router;
