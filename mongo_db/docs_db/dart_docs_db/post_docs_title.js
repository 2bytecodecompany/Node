const dartDocsCollection = require("../docs_collection");

async function postBeginnerDartDocsTitle(quizTitleDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await dartDocsCollection;

  let result = await collection.dart_docs_beginner_title.insertOne(quizTitleDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

async function postIntermediateDartDocsTitle(quizTitleDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await dartDocsCollection;

  let result = await collection.dart_docs_intermediate_title.insertOne(quizTitleDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

async function postExpertDartDocsTitle(quizTitleDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await dartDocsCollection;

  let result = await collection.dart_docs_expert_title.insertOne(quizTitleDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

module.exports = {
  beginner_quiz_title_response: postBeginnerDartDocsTitle,
  intermediate_quiz_title_response: postIntermediateDartDocsTitle,
  advanced_quiz_title_response: postExpertDartDocsTitle,
};
