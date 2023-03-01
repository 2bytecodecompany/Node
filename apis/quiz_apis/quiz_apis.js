const express = require("express");
const router = express.Router();
const quizTitlesData = require("../../mongo_db/quiz_db/quiz_operations/get_quiz_titles");
const quizData = require("../../mongo_db/quiz_db/quiz_operations/get_quiz");
const postQuizTitleData = require("../../mongo_db/quiz_db/quiz_operations/post_quiz_title");
const postQuizData = require("../../mongo_db/quiz_db/quiz_operations/post_quiz_data");
// const tokenDetails = require("../docs_apis");
// const jwt = require("jsonwebtoken");
// const verifyToken = require("../jwt_token/jwt_token_generation");

router.post("/get_quiz_title", async (req, res) => {
  // 0 = Beginner || 1 = Intermediate || 2 = Advanced

  let response = {
    status: 0,
    data: {},
  };

  if (req.body.quiz_type === 0) {
    let beginnerQuizTitle = await quizTitlesData.beginer_quiz_title();

    response.data = beginnerQuizTitle;

    res.send(response);
  } else if (req.body.quiz_type === 1) {
    let intermediateQuizTitle = await quizTitlesData.intermediate_quiz_title();

    response.data = intermediateQuizTitle;

    res.send(response);
  } else {
    let advancedQuizTitle = await quizTitlesData.advance_quiz_title();

    response.data = advancedQuizTitle;

    res.send(response);
  }
});

router.post("/get_quiz_data", async (req, res) => {
  // 0 = Beginner || 1 = Intermediate || 2 = Advanced 

  let response = {
    status: 0,
    data: {},
  };

  const quizId = req.body.quiz_id;

  if (req.body.quiz_type === 0) {
    let beginnerQuizData = await quizData.beginer_quiz_data(quizId);

    response.data = beginnerQuizData;

    res.send(response);
  } else if (req.body.quiz_type === 1) {
    let intermediateQuizData = await quizData.intermediate_quiz_data(quizId);

    response.data = intermediateQuizData;

    res.send(response);
  } else {
    let advancedQuizData = await quizData.advance_quiz_data(quizId);

    response.data = advancedQuizData;

    res.send(response);
  }
});

router.post("/post_quiz_title", async (req, res) => {
  const quizTitleData = req.body.data;
  const quizType = req.body.quiz_type;

  if (quizType === 0) {
    let beginnerPostQuizTitleResult =
      await postQuizTitleData.beginner_quiz_title_response(quizTitleData);

    res.send(beginnerPostQuizTitleResult);
  } else if (quizType === 1) {
    let intermediatePostQuizTitleResult =
      await postQuizTitleData.intermediate_quiz_title_response(quizTitleData);

    res.send(intermediatePostQuizTitleResult);
  } else {
    let advancedPostQuizTitleResult =
      await postQuizTitleData.advanced_quiz_title_response(quizTitleData);

    res.send(advancedPostQuizTitleResult);
  }
});

router.post("/post_quiz_data", async (req, res) => {
  const quizData = req.body.data;
  const quizType = req.body.quiz_type;

  if (quizType === 0) {
    let beginnerPostQuizDataResult =
      await postQuizData.beginner_quiz_data_response(quizData);

    res.send(beginnerPostQuizDataResult);
  } else if (quizType === 1) {
    let intermediatePostQuizResult =
      await postQuizData.intermediate_quiz_data_response(quizData);

    res.send(intermediatePostQuizResult);
  } else {
    let advancedPostQuizResult = await postQuizData.advanced_quiz_data_response(
      quizData
    );

    res.send(advancedPostQuizResult);
  }
});

module.exports = router;
