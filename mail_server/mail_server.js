const nodemailer = require("nodemailer");

function sendMail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "2bytecodecompany@gmail.com",
      pass: "F6d@ESI?I$=vDN*u",
      clientId:
        "648068822286-38a2b7p47c8kqoktgm2vfspbl3cr2dh8.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//042DJ5GiKfcxrCgYIARAAGAQSNwF-L9IrXzj1K00kwYqrP1cSNRRdC6wsJoXdNNwXPBz1BDvQukkWEgl7qd5HR1JOda_VulAWi78",
    },
  });

  const mailConfigurations = {
    from: "2bytecodecompany@gmail.com",
    to: email,
    subject: "Email Verification",
    text: "Your otp is " + otp,
  };

  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) throw Error(error);
    console.log("Email Sent Successfully");
    console.log(info);
  });
}

module.exports = sendMail;
