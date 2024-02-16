const ignorePuntuations = (text) => {
  return text.replace(/[.!?,]/g, "");
};

exports.splitIntoWords = (text) => {
  return ignorePuntuations(text)
    .split(/\s+/)
    .filter((word) => word.trim() !== "");
};

exports.countCharacters = (text) => {
  // not clear about the statement "treat uppercase and lowercase letters as the same"
  return text.toLowerCase().replace(/[^\w]/g, "");
};

exports.splitIntoSentences = (text) => {
  return text.split(/[.!?]+/).filter((sentence) => sentence.trim() !== "");
};

exports.splitIntoParagraphs = (text) => {
  return ignorePuntuations(text)
    .split(/\n\s*\n/)
    .filter((paragraph) => paragraph.trim() !== "");
};
