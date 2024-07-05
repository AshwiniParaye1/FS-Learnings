// const express = require("express");
// const app = express();

// app.use(express.json());

// let numberOfRequests = 0;
// function calculateRequests(req, res, next) {
//   numberOfRequests++;
//   console.log(numberOfRequests);
//   next();
// }

// //middleware which we want to use everywhere
// app.use(calculateRequests);

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   //authentication
//   //   if (username === "ashwini" && password === "pass12") {
//   //     if (kidneyId === 1 || kidneyId === 2) {
//   //       res.json({
//   //         msg: "Your kidney is fine",
//   //       });
//   //     }
//   //   }
//   if (username != "ashwini" || password != "pass12") {
//     res.status(400).json({
//       msg: "Something wrong with your inputs",
//     });
//     return;
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({
//       msg: "Something wrong with your inputs",
//     });
//     return;
//   }

//   //   res.status(400).json({
//   //     msg: "Something wrong with your inputs",
//   //   });
//   res.status(200).json({
//     msg: "Your kidney is fine",
//   });
// });

// app.get("/health-checkup2", function (req, res) {
//   res.send("health-checkup 2");
// });

const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  // kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + "kidneys");
});

app.listen(3000);
