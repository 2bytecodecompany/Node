const express = require("express");
const router = express.Router();
const tokenDetails = require("../jwt_token/keys");
const jwt = require("jsonwebtoken");
const verifyToken = require("../jwt_token/jwt_token_generation");
const insertUserDetails = require("../mongo_db/users_db/users_operations/insert_user_details");
const getUserDetails = require("../mongo_db/users_db/users_operations/get_user");
const updateUserDetails = require("../mongo_db/users_db/users_operations/update_user_details");
const deleteAccount = require("../mongo_db/users_db/users_operations/delete_user");

// For Login user

router.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  const userdata = {
    email: email,
    password: password,
  };

  let result = await getUserDetails(email);
  console.log("Result : ", result);

  let response = {
    status: 0,
    message: "Shabbash, Ho gya Login",
    data: {
      name: "",
      email: email,
      password: password,
    },
    jwt_token: "",
  };
  if (Object.keys(result).length === 0) {
    response.status = 2;
    response.message =
      "Are bhayyia account toh bna lo pahele, Ki direct hi ghuse chale aaoge website m";
    res.send(response);
  } else if (result[0]["email"] == email && result[0]["password"] == password) {
    let token = jwt.sign(userdata, tokenDetails.secretKey, {
      algorithm: tokenDetails.algorithm,
      expiresIn: "2h",
    });

    response.jwt_token = token;
    response.data.name = result[0]['name'];

    res.send(response);
  } else {
    response.status = 1;

    response.message =
      "Email Ya Password M Se Kuch Toh Galat h, Kya kr rhe h bhai ? shi Details Daal Na...";

    response.jwt_token =
      "Nhi milega token, Pahele Shi Password Daal :) :) :) :) :) :) :) :)";

    res.send(response);
  }
});

// For account creation.

router.post("/signup", async (req, res) => {
  let response = await insertUserDetails(req.body);

  if (response.status == 0) {
    let email = req.body.email;
    let password = req.body.password;

    const userdata = {
      email: email,
      password: password,
    };

    let token = jwt.sign(userdata, tokenDetails.secretKey, {
      algorithm: tokenDetails.algorithm,
      expiresIn: "2h",
    });

    response.jwt_token = token;
  }

  res.send(response);
});

// For updating user Details.

router.post("/update", verifyToken, async (req, res) => {
  let response = await updateUserDetails(req.body);

  res.send(response);
});

// For deleting User.

router.post("/delete", verifyToken, async (req, res) => {
  let result = await deleteAccount(req.body.email);

  res.send(result);
});

module.exports = router;
