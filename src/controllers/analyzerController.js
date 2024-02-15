const fileReader = require('../helpers/file-reader');
const textHelper = require('../helpers/analyzer-text');

exports.getNumberOfWords = async (req, res) => {
    try {
        const data = await fileReader.readTextFile();
        const words = textHelper.splitIntoWords(data);
        return res.json({ wordCount: words.length });
    } catch (error) {
        console.log('error :>> ', error);
        res.json(error);
    }
   
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



