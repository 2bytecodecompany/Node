const collections = require("../quiz_collection");

async function getBeginerQuizDataById(quizId) {
  const result = await collections;
  const quizTitleData = await result.beginer_quizes
    .find({ quiz_id: quizId })
    .toArray();
  return quizTitleData;
}

async function getIntermediateQuizDataById(quizId) {
  const result = await collections;
  const quizTitleData = await result.intermediate_quizes
    .find({ quiz_id: quizId })
    .toArray();
  return quizTitleData;
}

async function getAdvancedQuizDataById(quizId) {
  const result = await collections;
  const quizTitleData = await result.advanced_quizes
    .find({ quiz_id: quizId })
    .toArray();
  return quizTitleData;
}

module.exports = {
  beginer_quiz_data: getBeginerQuizDataById,
  intermediate_quiz_data: getIntermediateQuizDataById,
  advance_quiz_data: getAdvancedQuizDataById,
};
