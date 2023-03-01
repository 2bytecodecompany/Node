const userCollection = require("../user_collection_connect");

async function updateUserDetails(userDetails) {
  let collection = await userCollection;

  let result = await collection.updateOne(
    { email: userDetails["email"] },
    { $set: userDetails }
  );

  let response = {
    status: 0,
    message: "Congrats bete, details update ho gyi h yeye",
    data: userDetails,
  };

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Details Save nhi hui, Dobara try kro munna :)";

    return response;
  }
}

module.exports = updateUserDetails;
