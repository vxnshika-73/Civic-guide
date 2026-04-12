import { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    const res = await axios.post("http://localhost:5000/api/chat", {
      query,
    });

    setResponse(res.data.answer);
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">AI Chat Assistant</h2>

      <input
        type="text"
        placeholder="Ask about government process..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-lg bg-slate-800 mb-3 text-white"
      />

      <button
        onClick={handleAsk}
        className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg"
      >
        Ask AI
      </button>

      {response && (
        <div className="mt-4 p-3 bg-slate-800 rounded-lg text-sm whitespace-pre-line">
          {response}
        </div>
      )}
    </div>
  );
};

export default ChatBot;