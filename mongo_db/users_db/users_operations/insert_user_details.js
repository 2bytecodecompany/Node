const userCollection = require("../user_collection_connect");
const getUserDetails = require("./get_user");

async function insertUserDetails(userData) {
  let collection = await userCollection;

  let userDetailsFromDb = await getUserDetails(userData["email"]);

  let response = {
    status: 0,
    message: "Muuuuaaahhh, Bn gya account congrats...",
    data: userData,
  };

  if (Object.keys(userDetailsFromDb).length === 0) {
    let result = await collection.insertOne(userData);

    if (result.acknowledged) {
      return response;
    } else {
      response["status"] = 2;
      response["message"] = "Data Save nhi hua Phir se try kro :) :)";
      return response;
    }
  } else {
    response.status = 1;
    response.message =
      "Account h pahele se bhai, Same email pr kitne account banayega ?";

    return response;
  }
}

module.exports = insertUserDetails;
