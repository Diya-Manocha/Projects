import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Chatbot = ({onClose}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
 

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    
    

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        messages: updatedMessages,
      });
      
      const botMessage = response.data.choices[0].message;
      setMessages([...updatedMessages, botMessage]);
    } catch (error) {
      console.error("OpenAI error", error);
    }
  };
  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white dark:bg-gray-800 rounded shadow-lg border z-50">
      <div className="flex justify-between items-center p-2 bg-blue-500 text-white rounded-t">
        <span>SmartBot</span>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="h-64 overflow-y-auto p-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-white ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="flex p-2 border-t">
        <input
          className="flex-1 px-2 py-1 border rounded dark:bg-gray-600 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage} className="ml-2 px-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
