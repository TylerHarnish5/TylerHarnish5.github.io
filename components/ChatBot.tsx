"use client";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm just a chatbot, but I'm doing great! 😊 How about you?",
    "what's your name": "I'm a chatbot created by Tyler Harnish!",
    portfolio: "You can check out my portfolio at [your portfolio link here]!",
    education: "I am currently studying Computer Science at Kean University, graduating in 2026.",
    skills: "I have experience with HTML, CSS, JavaScript, React, Next.js, Tailwind, Node.js, and MySQL.",
    contact: "You can reach me at harnisht@kean.edu or connect with me on LinkedIn: www.linkedin.com/in/tyler-harnish-0744012b1.",
    resume: "You can download my resume here: [your resume link here].",
    default: "I'm not sure how to answer that. Try asking about my skills, education, or portfolio!",
    "bye": "Goodbye! Have a great day! 👋"
  };

  const getBotResponse = (message: string) => {
    message = message.toLowerCase();

    for (const keyword in predefinedResponses) {
      if (message.includes(keyword)) {
        return predefinedResponses[keyword];
      }
    }
    return predefinedResponses["default"];
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const botMessage = { role: "bot", content: getBotResponse(input) };
    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-center font-semibold text-xl">
        Chatbot
      </div>

      <div className="h-64 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`px-4 py-2 max-w-xs rounded-lg text-sm ${
                msg.role === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-700 text-gray-200 rounded-bl-none"
              }`}
            >
              <strong>{msg.role === "user" ? "You" : "Bot"}</strong>: {msg.content}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 border-t border-gray-700 flex">
        <input
          type="text"
          className="flex-1 p-2 bg-gray-900 text-white border border-gray-600 rounded-l-lg focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
