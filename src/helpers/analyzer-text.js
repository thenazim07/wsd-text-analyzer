

exports.splitIntoWords = (text) =>{
    return text.split(/\s+/).filter(word => word.trim() !== '');
}