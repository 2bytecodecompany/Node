const quizCollection = require("../quiz_collection");

async function postBeginnerQuizTitle(quizTitleDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await quizCollection;

  let result = await collection.beginer_title.insertOne(quizTitleDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

async function postIntermediateQuizTitle(quizTitleDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await quizCollection;

  let result = await collection.intermediate_title.insertOne(quizTitleDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

async function postAdvancedQuizTitle(quizTitleDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await quizCollection;

  let result = await collection.advanced_title.insertOne(quizTitleDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

module.exports = {
  beginner_quiz_title_response: postBeginnerQuizTitle,
  intermediate_quiz_title_response: postIntermediateQuizTitle,
  advanced_quiz_title_response: postAdvancedQuizTitle,
};
