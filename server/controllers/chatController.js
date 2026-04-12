const { getAIResponse } = require("../services/aiService");

const handleChat = async (req, res) => {
  try {
    const { query } = req.body;

    const response = await getAIResponse(query);

    res.json({ answer: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI response failed" });
  }
};

module.exports = { handleChat };