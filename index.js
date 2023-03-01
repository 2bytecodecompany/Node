const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const users = require("./users_api/users");
const quiz = require("./apis/quiz_apis/quiz_apis");
const dartDocs = require("./apis/docs_apis/docs_api");
const mailServer = require("./mail_server/mail_server");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Working Fine<h1>");
});

app.post("/email_verification", (req, res) => {
  var rand = (Math.floor(Math.random() * 99999) + 1).toString();

  let otp = "0";

  if(rand.length === 5) {
    otp = rand;
  }else {
    otp = "65387";
  }

  mailServer(req.body.email, otp);

  res.send({
    "status": 0,
    "otp": otp
  });
});

app.use("/user", users);

app.use("/quiz", quiz);

app.use("/docs", dartDocs);

app.listen(process.env.PORT || 3030, () => {
  console.log("Server is running on : http://127.0.0.1:3030");
});
