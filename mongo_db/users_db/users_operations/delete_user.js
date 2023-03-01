const userCollection = require("../user_collection_connect");

async function deleteUser(email) {
  let collection = await userCollection;

  let result = await collection.deleteOne({ email: email });

  let response = {
    status: 0,
    message: "Ho gya account delete, bahout yaad aiyegi apki :(",
  };

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message =
      "Account deletion Failed, Bhagwan bhi nhi chahte ki aap yha se jaye :(";
    return response;
  }
}

module.exports = deleteUser;
