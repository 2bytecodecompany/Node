const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const tokendetails = require("./keys");

router.use(function (req, res, next) {
  var token = req.headers["x-access-token"];
  console.log(token);
  console.log("Working Middleware");
  if (token) {
    jwt.verify(
      token,
      tokendetails.secretKey,
      {
        algorithm: tokendetails.algorithm,
      },
      function (err, decoded) {
        if (err) {
          let errordata = {
            message: err.message,
            expiredAt: err.expiredAt,
          };
          console.log(errordata);
          return res.status(401).json({
            status: 1,
            message:
              "Bete Token Expire ho chuka h, Dusra token leke aao Login counter se",
          });
        }
        req.decoded = decoded;
        console.log(decoded);
        next();
      }
    );
  } else {

    return res.status(403).json({
      status: 1,
      message: "Acchaaa! Bina Token k under jayega ? Token leke aa pahele",
    });
  }
});

module.exports = router;
