const express = require("express");
const router = require("./router/routerRegister");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var app = express();
const router2 = require("./router/routerUpload");
const router1 = require("./router/routerverify");
const router3 = require("./router/routerCategories");
const router4 = require("./router/routerPost");
const route = require("./router/routerShowPost");
// parse application/x-www-form-urlencoded
app.use(express.static("upload"));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/ppl");
app.use("/user1", router);
app.use("/user", router1);
app.use("/post", router4);
app.get("/test", (req, res) => {
  res.send("testing");
});
app.use("/show", route);
// app.use('/',router2);
app.use("/category", router3);
app.listen(3002, () => {
  console.log("server is running .....");
});
