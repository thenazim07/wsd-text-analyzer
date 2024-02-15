const express = require("express");
const router = express.Router();
const analyzerController = require("./controllers/analyzerController");

router.get("/words", analyzerController.getNumberOfWords);
router.get("/characters", analyzerController.getNumberOfCharacters);
router.get("/sentences", analyzerController.getNumberOfSentences);
router.get("/paragraphs", analyzerController.getNumberOfParagraphs);
router.get("/longest-words", analyzerController.getLongestWordsInParagraphs);

module.exports = router;
