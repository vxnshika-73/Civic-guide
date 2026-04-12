const { GoogleGenerativeAI } = require("@google/generative-ai");
const { retrieveRelevantDocs } = require("./ragService");

require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getAIResponse = async (query) => {
  console.log("QUERY:", query);

  const docs = await retrieveRelevantDocs(query);
  console.log("DOCS:", docs);

  const context = docs.map(doc => doc.content).join("\n\n");
  console.log("CONTEXT:", context);

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = `
You are CivicGuide AI.

Answer ONLY using the context below.
If answer is not found in context, say "I couldn't find relevant government information."

Context:
${context}

User Question:
${query}
`;

  const result = await model.generateContent(prompt);
  console.log("RAW GEMINI:", result.response.text());
  return result.response.text();
};

module.exports = { getAIResponse };