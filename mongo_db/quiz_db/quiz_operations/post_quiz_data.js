const quizCollection = require("../quiz_collection");

async function postBeginnerQuizData(quizDataDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await quizCollection;

  let result = await collection.beginer_quizes.insertOne(quizDataDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

async function postIntermediateQuizData(quizDataDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await quizCollection;

  let result = await collection.intermediate_quizes.insertOne(quizDataDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

async function postAdvancedQuizData(quizDataDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await quizCollection;

  let result = await collection.advanced_quizes.insertOne(quizDataDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

module.exports = {
  beginner_quiz_data_response: postBeginnerQuizData,
  intermediate_quiz_data_response: postIntermediateQuizData,
  advanced_quiz_data_response: postAdvancedQuizData,
};
