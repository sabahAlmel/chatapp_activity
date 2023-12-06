import React, { useState } from "react";
import "./Input.css";

function Input({ sendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  );
}

export default Input;
