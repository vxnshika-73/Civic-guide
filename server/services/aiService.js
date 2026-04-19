const axios = require("axios");
const { retrieveRelevantDocs } = require("./ragService");

require("dotenv").config();

const getAIResponse = async (query) => {
  const docs = await retrieveRelevantDocs(query);

  const context = docs.map(doc => doc.content).join("\n\n");

  const prompt = `
You are CivicGuide AI.

Use only the context below.

Give response in this format:

✅ Process Name

📌 Steps:
1.
2.
3.

📄 Required Documents:
- item
- item

💰 Fees:
Mention if available else Not specified

🌐 Official Portal:
official link only

Keep answer clean, short, readable.

Context:
${context}

Question:
${query}
`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemma-3-4b-it:free",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    console.log(error.response?.data || error.message);
    return "AI service temporarily unavailable.";
  }
};

module.exports = { getAIResponse };