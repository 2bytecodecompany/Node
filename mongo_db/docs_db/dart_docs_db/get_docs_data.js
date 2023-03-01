const collections = require("../docs_collection");

async function getBeginerDocsDataById(docsId) {
  const result = await collections;
    const dartDocsData = await result.dart_docs_beginner_docs
        .find({ docs_id: docsId })
        .toArray();
    return dartDocsData;
}

async function getIntermediateDocsDataById(docsId) {
  const result = await collections;
    const dartDocsData = await result.dart_docs_intermediate_docs
        .find({ docs_id: docsId })
        .toArray();
    return dartDocsData;
}

async function getExpertDocsDataById(docsId) {
  const result = await collections;
    const dartDocsData = await result.dart_docs_expert_docs
        .find({ docs_id: docsId })
        .toArray();
    return dartDocsData;
}

module.exports = {
  beginer_quiz_data: getBeginerDocsDataById,
  intermediate_quiz_data: getIntermediateDocsDataById,
  advance_quiz_data: getExpertDocsDataById,
};
