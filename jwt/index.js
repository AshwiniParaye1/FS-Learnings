const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "alice@example.com",
    password: "password123",
    name: "Alice Johnson",
  },
  {
    username: "bob@example.com",
    password: "securePassword!",
    name: "Bob Smith",
  },
  {
    username: "eve@example.com",
    password: "evePass123",
    name: "Eve Brown",
  },
];

//check if user exists in ALL_USERS array
function userExists(username, password) {
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

app.post("/sign-in", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "user doesn't exist",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  res.json({
    token: token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
      users: ALL_USERS.filter((user) => {
        if (user.username === username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (error) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
