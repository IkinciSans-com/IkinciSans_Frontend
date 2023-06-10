import React from "react";
import "../pages/ChatPage.css";

function MessageList({ messages, selectedUser }) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message-item ${message.sender === selectedUser?.name ? "sent" : ""}`}
        >
          <div className="message-text">{message.text}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;

