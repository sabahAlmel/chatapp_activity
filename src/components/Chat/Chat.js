import React from "react";
import "./Chat.css";

function Chat({ messages, username }) {
  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <p
          key={index}
          className={`chat-message ${
            msg.sender === username ? "sent" : "received"
          }`}
        >
          {msg.text}
        </p>
      ))}
    </div>
  );
}

export default Chat;
