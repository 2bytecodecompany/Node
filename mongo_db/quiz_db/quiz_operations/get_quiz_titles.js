const collections = require("../quiz_collection");

async function getBeginerQuizTitle() {
  const result = await collections;
  const quizTitleData = await result.beginer_title
    .find({})
    .toArray();
  return quizTitleData;
}

async function getIntermediateQuizTitle() {
  const result = await collections;
  const quizTitleData = await result.intermediate_title
    .find({})
    .toArray();
  return quizTitleData;
}

async function getAdvancedQuizTitle() {
  const result = await collections;
  const quizTitleData = await result.advanced_title
    .find({})
    .toArray();
  return quizTitleData;
}

module.exports = {
  beginer_quiz_title: getBeginerQuizTitle,
  intermediate_quiz_title: getIntermediateQuizTitle,
  advance_quiz_title: getAdvancedQuizTitle,
};
