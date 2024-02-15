const express = require('express');
const router = express.Router();
const analyzerController = require('./controllers/analyzerController');

router.get('/words', analyzerController.getNumberOfWords);

module.exports = router;