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

// const express = require("express");

// const app = express();

// app.listen(3000);

// function sum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("hi your ans is == " + ans);
// });

const express = require("express");
const app = express();

app.use(express.json());

var users = [
  {
    fname: "Ronny",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const userKidneys = users[0].kidneys;
  const numberOfKidneys = userKidneys.length;
  let numberOfHealthyKidney = 0;
  for (let i = 0; i < userKidneys.length; i++) {
    if (userKidneys[i].healthy) {
      numberOfHealthyKidney = numberOfHealthyKidney + 1;
    }
  }
  const numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidney;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidney,
    numberOfUnhealthyKidney,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  if (isAtleastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = false;
    }
    res.json({
      msg: "Done!",
    });
  } else {
    res.status(411).json({
      msg: "You do not have unhealthy kidneys!",
    });
  }
});

app.delete("/", function (req, res) {
  if (isAtleastOneUnhealthyKidney()) {
    const newkidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newkidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newkidneys;
    res.json({
      msg: "Done!",
    });
  } else {
    res.status(411).json({
      msg: "You do not have unhealthy kidneys!",
    });
  }
});

function isAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(3000);
