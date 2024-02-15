const path = require("path");
const fs = require("fs");

const sampleTextPath = path.resolve(__dirname, "../../sample.txt");

exports.readTextFile = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(sampleTextPath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
