const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

// mongoose.connect(
//   "mongodb+srv://ashwini:yIyFdWpT9zLzCxiE@mycluster01.39rec71.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster01"
// );

const app = express();

app.use(express.json());

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   password: String,
// });

// //check if user exists in ALL_USERS array
// function userExists(username, password) {
//   for (let i = 0; i < ALL_USERS.length; i++) {
//     if (
//       ALL_USERS[i].username === username &&
//       ALL_USERS[i].password === password
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// app.post("/sign-in", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "user doesn't exist",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   res.json({
//     token: token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     res.json({
//       users: ALL_USERS.filter((user) => {
//         if (user.username === username) {
//           return false;
//         } else {
//           return true;
//         }
//       }),
//     });
//   } catch (error) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

mongoose.connect(
  "mongodb+srv://ashwini:yIyFdWpT9zLzCxiE@mycluster01.39rec71.mongodb.net/userappnew?retryWrites=true&w=majority&appName=MyCluster01"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({
      msg: "Username already exists",
    });
  }

  const user = new User({
    name: name,
    email: email,
    password: password,
  });

  user.save().then(() => console.log("user info saved in database"));
  res.json({
    msg: "User created successfully",
  });
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
