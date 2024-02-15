

exports.splitIntoWords = (text) =>{
    return text.split(/\s+/).filter(word => word.trim() !== '');
}

exports.countCharacters = (text) =>{
    return text.toLowerCase().replace(/[^\w]/g, '');
}