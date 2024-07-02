// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.get("/", function (req, res) {
//   res.send("<b>Hey There!</b>");
// });

// app.get("/jsonObj", function (req, res) {
//   res.json({
//     FirstName: "Ashwini",
//     LastName: "Paraye",
//   });
// });
// app.post("/conversation", function (req, res) {
//   console.log("req body is ==== ", req.body);
//   //   console.log(req.headers);
//   res.send({
//     msg: "some message",
//   });
// });

// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");

const app = express();

app.listen(3000);

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = sum(n);
  res.send("hi your ans is == " + ans);
});
