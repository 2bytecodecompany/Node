const dbConnection = require("../database_connections/mongodb_connection");

let userCollection = dbConnection().then((result) => {
  return result.userDb.collection("users"); // promise
});

module.exports = userCollection;