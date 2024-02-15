const fileReader = require('../helpers/file-reader');
const textHelper = require('../helpers/analyzer-text');

exports.getNumberOfWords = async (req, res) => {
    try {
        const data = await fileReader.readTextFile();
        const words = textHelper.splitIntoWords(data);
        console.log('words :>> ', words);
        return res.json({ wordCount: words.length });
    } catch (error) {
        console.log('error :>> ', error);
        res.json(error);
    }
   
}

exports.getNumberOfCharacters = async (req, res) => {
    try {
        const data = await fileReader.readTextFile();
        const characters = textHelper.countCharacters(data);
        console.log('characters :>> ', characters);
        return res.json({ characters: characters.length });
    } catch (error) {
        console.log('error :>> ', error);
        res.json(error);
    }
}

exports.getNumberOfSentences = async (req, res) => {
    try {
        const data = await fileReader.readTextFile();
        const sentences = textHelper.splitIntoSentences(data);
        console.log('sentences :>> ', sentences);
        return res.json({ sentences: sentences.length });
    } catch (error) {
        console.log('error :>> ', error);
        res.json(error);
    }
}

exports.getNumberOfParagraphs = async (req, res) => {
    try {
        const data = await fileReader.readTextFile();
        const paragraphs = textHelper.splitIntoParagraphs(data);
        console.log('paragraphs :>> ', paragraphs);
        return res.json({ paragraphs: paragraphs.length });
    } catch (error) {
        console.log('error :>> ', error);
        res.json(error);
    }
}

exports.getLongestWordsInParagraphs = async (req, res) => {
    try {
        const data = await fileReader.readTextFile();
        const paragraphs = textHelper.splitIntoParagraphs(data);
        let longestWords = [];
        paragraphs.forEach(paragraph => {
            const words = textHelper.splitIntoWords(paragraph);
            const longestWord = words.reduce((longest, current) => {
                return current.length > longest.length ? current : longest;
            }, '');
            words.forEach((word) => {
                if (word.length === longestWord.length) {
                    longestWords.push(word);
                }
            });
        });
        res.json({ longestWords });
    } catch (error) {
        console.log('error :>> ', error);
        res.json(error);
    }
}



