const path = require('path');
const fs = require('fs');
const analyzerTextHelper = require('../helpers/analyzer-text');
const sampleTextPath = path.resolve(__dirname, "../../sample.txt");

exports.getNumberOfWords = async (req, res) => {
    fs.readFile(sampleTextPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        const words = analyzerTextHelper.splitIntoWords(data);
        res.json({ wordCount: words.length });
    });
}

exports.getNumberOfCharacters = async (req, res) => {
    res.json("get characters");
}

exports.getNumberOfSentences = async (req, res) => {
    res.json("get sentences");
}

exports.getNumberOfParagraphs = async (req, res) => {
    res.json("get paragraphs");
}

exports.getLongestWordsInParagraphs = async (req, res) => {
    res.json("get longest words in paragraphs");
}



