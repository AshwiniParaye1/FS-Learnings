const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("<b>Hey There!</b>");
});

app.get("/jsonObj", function (req, res) {
  res.json({
    FirstName: "Ashwini",
    LastName: "Paraye",
  });
});
app.post("/conversation", function (req, res) {
  console.log("req body is ==== ", req.body);
  //   console.log(req.headers);
  res.send({
    msg: "some message",
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
