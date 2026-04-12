const fs = require("fs");
const path = require("path");

const retrieveRelevantDocs = async (query) => {
  const filePath = path.join(__dirname, "../data/governmentServices.json");

  const rawData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const lowerQuery = query.toLowerCase();

  const matchedDocs = rawData.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.content.toLowerCase().includes(lowerQuery)
  );

  return matchedDocs.length ? matchedDocs : rawData.slice(0, 2);
};

module.exports = { retrieveRelevantDocs };