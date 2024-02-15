

exports.splitIntoWords = (text) =>{
    return text.split(/\s+/).filter(word => word.trim() !== '');
}

exports.countCharacters = (text) =>{
    return text.replace(/\s/g, '').length;
}