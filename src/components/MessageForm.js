import React, { useState } from "react";
import "../pages/ChatPage.css";

function MessageForm({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Mesajınızı buraya yazın"
        value={message}
        onChange={handleChange}
        className="message-input"
      />
      <button type="submit" className="send-button">Gönder</button>
    </form>
  );
}

export default MessageForm;
