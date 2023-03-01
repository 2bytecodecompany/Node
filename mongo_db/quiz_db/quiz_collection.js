const dbConnection = require("../database_connections/mongodb_connection");

let multipleCollections = dbConnection().then((result) => {
  return {
    beginer_title: result.quizDb.collection("beginner_title"),
    intermediate_title: result.quizDb.collection("intermediate_title"),
    advanced_title: result.quizDb.collection("advanced_title"),
    beginer_quizes: result.quizDb.collection("beginner_quizes"),
    intermediate_quizes: result.quizDb.collection("intermediate_quizes"),
    advanced_quizes: result.quizDb.collection("advanced_quizes")
  }; // promise
});

module.exports = multipleCollections;