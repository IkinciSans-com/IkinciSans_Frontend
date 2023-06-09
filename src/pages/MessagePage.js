import React, { useState } from "react";
import "../style/chat.css";

const MessagingPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "User A", content: "Merhaba!" },
    { id: 2, sender: "User B", content: "Selam!" },
  ]);

  const handleSendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now(), sender: "User A", content: message },
    ]);

    setMessage("");
  };

  return (
    <div className="container messaging-page">
      <h3 className="page-title">Mesajlaşma Sayfası</h3>
      <div className="message-container">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender === "User A" ? "sent" : "received"}`}
          >
            <div className="message-content">{msg.content}</div>
            <div className="message-sender">{msg.sender}</div>
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Mesajınızı girin"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleSendMessage}
          disabled={message.trim() === ""}
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

export default MessagingPage;
