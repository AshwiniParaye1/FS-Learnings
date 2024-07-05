const express = require("express");
const app = express();

app.use(express.json());

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  //authentication
  //   if (username === "ashwini" && password === "pass12") {
  //     if (kidneyId === 1 || kidneyId === 2) {
  //       res.json({
  //         msg: "Your kidney is fine",
  //       });
  //     }
  //   }
  if (username != "ashwini" || password != "pass12") {
    res.status(400).json({
      msg: "Something wrong with your inputs",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Something wrong with your inputs",
    });
    return;
  }

  //   res.status(400).json({
  //     msg: "Something wrong with your inputs",
  //   });
  res.status(200).json({
    msg: "Your kidney is fine",
  });
});

app.listen(3000);
