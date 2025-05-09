import React, { useState, useEffect } from "react";
import Chatbot from "./Chatbot";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ChatbotIcon = () => {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      if (e.key === "Escape") {
        setShowChat(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <>
      <button
        onClick={() => setShowChat((prev) => !prev)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
      >
        <IoChatbubbleEllipsesOutline size={24} />
 </button>
        {showChat && (
          <div className="fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50"
          onClick={(e) => e.stopPropagation()}
          >
            <Chatbot onClose={()=> setShowChat(false)} />
          </div>
        )}
     
    </>
  );
};

export default ChatbotIcon;
