import React, { useState } from "react";
import Chat from "./components/Chat/Chat.js";
import Input from "./components/Input/Input.js";

function App() {
  const [username, setUsername] = useState("Current User");
  const [messages, setMessages] = useState([
    {
      text: "Hello",
      sender: "Current User", // or "received"
    },
    {
      text: "Hellooo",
      sender: "user X", // or "received"
    },
    {
      text: "How are you today?",
      sender: "Current User",
    },
    {
      text: "I'm good, How about you?",
      sender: "user Y", // or "received"
    },
    {
      text: "I'm great!",
      sender: "Current User",
    },
    {
      text: "Are you ready to start the challenge!",
      sender: "user X", // or "received"
    },
    {
      text: "Absolutely!",
      sender: "Current User",
    },
    {
      text: "Great, let's start!",
      sender: "user Y", // or "received"
    },
  ]);

  // Placeholder for sending message
  const sendMessage = (msg) => {
    // Socket.IO integration will go here
    console.log(msg); // For testing
  };

  return (
    <div>
      <h1>Real-Time Chat</h1>
      <Chat messages={messages} username={username} />
      <Input sendMessage={sendMessage} />
    </div>
  );
}

export default App;
