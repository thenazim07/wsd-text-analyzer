

exports.splitIntoWords = (text) =>{
    return text.split(/\s+/).filter(word => word.trim() !== '');
}

exports.countCharacters = (text) =>{
    // not clear about the statement "treat uppercase and lowercase letters as the same"
    return text.toLowerCase().replace(/[^\w]/g, '');
}

exports.splitIntoSentences = (text) => {
    return text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '');
}