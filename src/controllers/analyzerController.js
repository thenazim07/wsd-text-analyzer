const fileReader = require("../../helpers/file-reader");
const textHelper = require("../../helpers/analyzer-text");
const logger = require("../../logger");

exports.getNumberOfWords = async (req, res, next) => {
  try {
    const data = await fileReader.readTextFile();
    const words = textHelper.splitIntoWords(data);
    console.log("words :>> ", words);
    return res.json({ wordCount: words.length });
  } catch (error) {
    next(error);
  }
};

exports.getNumberOfCharacters = async (req, res, next) => {
  try {
    const data = await fileReader.readTextFile();
    const characters = textHelper.countCharacters(data);
    console.log("characters :>> ", characters);
    return res.json({ characters: characters.length });
  } catch (error) {
    next(error);
  }
};

exports.getNumberOfSentences = async (req, res, next) => {
  try {
    const data = await fileReader.readTextFile();
    const sentences = textHelper.splitIntoSentences(data);
    console.log("sentences :>> ", sentences);
    return res.json({ sentences: sentences.length });
  } catch (error) {
    next(error);
  }
};

exports.getNumberOfParagraphs = async (req, res, next) => {
  try {
    const data = await fileReader.readTextFile();
    const paragraphs = textHelper.splitIntoParagraphs(data);
    console.log("paragraphs :>> ", paragraphs);
    return res.json({ paragraphs: paragraphs.length });
  } catch (error) {
    next(error);
  }
};

exports.getLongestWordsInParagraphs = async (req, res, next) => {
  try {
    const data = await fileReader.readTextFile();
    const paragraphs = textHelper.splitIntoParagraphs(data);
    let longestWords = [];
    paragraphs.forEach((paragraph) => {
      const words = textHelper.splitIntoWords(paragraph);
      const longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
      }, "");
      words.forEach((word) => {
        if (word.length === longestWord.length) {
          longestWords.push(word);
        }
      });
    });
    res.json({ longestWords });
  } catch (error) {
    next(error);
  }
};
