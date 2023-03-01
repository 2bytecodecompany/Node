const express = require("express");
const router = express.Router();
const dartDocsTitleData = require("../../mongo_db/docs_db/dart_docs_db/get_docs_title");
const dartDocsData = require("../../mongo_db/docs_db/dart_docs_db/get_docs_data");
const postdartDocsTitleData = require("../../mongo_db/docs_db/dart_docs_db/post_docs_title");
const postdartDocsData = require("../../mongo_db/docs_db/dart_docs_db/post_dart_docs_data");
// const tokenDetails = require("../docs_apis");
// const jwt = require("jsonwebtoken");
// const verifyToken = require("../jwt_token/jwt_token_generation");

router.post("/get_dart_docs_title", async (req, res) => {
  // 0 = Beginner || 1 = Intermediate || 2 = Advanced

  let response = {
    status: 0,
    data: {},
  };

  if (req.body.docs_type === 0) {
    let beginnerQuizTitle = await dartDocsTitleData.beginer_quiz_title();

    response.data = beginnerQuizTitle;

    res.send(response);
  } else if (req.body.docs_type === 1) {
    let intermediateQuizTitle =
      await dartDocsTitleData.intermediate_quiz_title();

    response.data = intermediateQuizTitle;

    res.send(response);
  } else {
    let advancedQuizTitle = await dartDocsTitleData.advance_quiz_title();

    response.data = advancedQuizTitle;

    res.send(response);
  }
});

router.post("/get_dart_docs_data", async (req, res) => {
  // 0 = Beginner || 1 = Intermediate || 2 = Advanced

  let response = {
    status: 0,
    data: {},
  };

  if (req.body.docs_type === 0) {
    let beginnerdartDocsData = await dartDocsData.beginer_quiz_data(
      req.body.docs_id
    );

    response.data = beginnerdartDocsData;

    res.send(response);
  } else if (req.body.docs_type === 1) {
    let intermediatedartDocsData = await dartDocsData.intermediate_quiz_data(
      req.body.docs_id
    );

    console.log(req.body.docs_id);
    console.log(intermediatedartDocsData);

    response.data = intermediatedartDocsData;

    res.send(response);
  } else {
    let advanceddartDocsData = await dartDocsData.advance_quiz_data(
      req.body.docs_id
    );

    response.data = advanceddartDocsData;

    res.send(response);
  }
});

// router.post("/post_dart_docs_title", async (req, res) => {
//   const quizTitleData = req.body.data;
//   const quizType = req.body.docs_type;

//   if (quizType === 0) {
//     let beginnerPostQuizTitleResult =
//       await postdartDocsTitleData.beginner_quiz_title_response(quizTitleData);

//     res.send(beginnerPostQuizTitleResult);
//   } else if (quizType === 1) {
//     let intermediatePostQuizTitleResult =
//       await postdartDocsTitleData.intermediate_quiz_title_response(
//         quizTitleData
//       );

//     res.send(intermediatePostQuizTitleResult);
//   } else {
//     let advancedPostQuizTitleResult =
//       await postdartDocsTitleData.advanced_quiz_title_response(quizTitleData);

//     res.send(advancedPostQuizTitleResult);
//   }
// });

router.post("/post_dart_docs", async (req, res) => {
  const quizTitleData = req.body.docs_title_data;
  const dartDocsData = req.body.docs_body_data;
  const quizType = req.body.docs_type;

  if (quizType === 0) {
    let beginnerPostQuizTitleResult =
      await postdartDocsTitleData.beginner_quiz_title_response(quizTitleData);

    if (beginnerPostQuizTitleResult.status === 0) {
      let beginnerPostdartDocsDataResult =
        await postdartDocsData.beginner_quiz_data_response(dartDocsData);
      res.send(beginnerPostdartDocsDataResult);
    } else {
      res.send(beginnerPostQuizTitleResult);
    }
  } else if (quizType === 1) {
    let intermediatePostQuizTitleResult =
      await postdartDocsTitleData.intermediate_quiz_title_response(
        quizTitleData
      );

    if (intermediatePostQuizTitleResult.status === 0) {
      let intermediatePostQuizResult =
        await postdartDocsData.intermediate_quiz_data_response(dartDocsData);

      res.send(intermediatePostQuizResult);
    } else {
      res.send(intermediatePostQuizTitleResult);
    }
  } else {
    let advancedPostQuizTitleResult =
      await postdartDocsTitleData.advanced_quiz_title_response(quizTitleData);

    if (advancedPostQuizTitleResult.status === 0) {
      let advancedPostQuizResult =
        await postdartDocsData.advanced_quiz_data_response(dartDocsData);

      res.send(advancedPostQuizResult);
    } else {
      res.send(advancedPostQuizTitleResult);
    }
  }
});

module.exports = router;
