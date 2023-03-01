const collections = require("../docs_collection");

async function getBeginerDocsTitle() {
  const result = await collections;
    const docsTitleData = await result.dart_docs_beginner_title
        .find({})
        .toArray();
    return docsTitleData;
}

async function getIntermediateDocsTitle() {
  const result = await collections;
    const docsTitleData = await result.dart_docs_intermediate_title
        .find({})
        .toArray();
    return docsTitleData;
}

async function getExpertDocsTitle() {
  const result = await collections;
    const docsTitleData = await result.dart_docs_expert_title
        .find({})
        .toArray();
    return docsTitleData;
}

module.exports = {
  beginer_quiz_title: getBeginerDocsTitle,
  intermediate_quiz_title: getIntermediateDocsTitle,
  advance_quiz_title: getExpertDocsTitle,
};
