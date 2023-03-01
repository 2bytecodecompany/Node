const dartDocsCollection = require("../docs_collection");

async function postBeginnerDartDocs(dartDocsDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await dartDocsCollection;

  let result = await collection.dart_docs_beginner_docs.insertOne(dartDocsDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

async function postIntermediateDartDocs(dartDocsDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await dartDocsCollection;

  let result = await collection.dart_docs_intermediate_docs.insertOne(dartDocsDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

async function postExpertDartDocs(dartDocsDetails) {
  let response = {
    status: 0,
    message: "Data Saved Sucessfully",
  };

  let collection = await dartDocsCollection;

  let result = await collection.dart_docs_expert_docs.insertOne(dartDocsDetails);

  if (result.acknowledged) {
    return response;
  } else {
    response.status = 1;
    response.message = "Error Occured, PLease try again";
    return response;
  }
}

module.exports = {
  beginner_quiz_data_response: postBeginnerDartDocs,
  intermediate_quiz_data_response: postIntermediateDartDocs,
  advanced_quiz_data_response: postExpertDartDocs,
};
