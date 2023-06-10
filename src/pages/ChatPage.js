import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";
import "../pages/ChatPage.css";

function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const fetchMessages = (userId) => {
    //API çağrısı
    return getDefaultMessages(userId);
  };

  const getDefaultMessages = (userId) => {
    const defaultMessages = {
      1: [{ id: 1, sender: "John", text: "Merhaba!" }],
      2: [{ id: 1, sender: "Jane", text: "Selam!" }],
      3: [{ id: 1, sender: "Alice", text: "Merhaba, nasılsın?" }],
      4: [{ id: 1, sender: "Bob", text: "Hey, ne yapıyorsun?" }],
    
    };

    return Promise.resolve(defaultMessages[userId] || []);
  };

  const updateMessages = (newMessages) => {
    setMessages(newMessages);
  };

  const updateChatScreen = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      sender: selectedUser ? selectedUser.sender : "Siz",
      text: message,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-page">
      <Sidebar
        onSelectUser={updateChatScreen}
        fetchMessages={fetchMessages}
        updateMessages={updateMessages}
        updateChatScreen={updateChatScreen}
      />
      <div className="chat-container">
        <div className="chat-header">
          {selectedUser ? (
            <h2>{selectedUser.name}</h2>
          ) : (
            <h2>Sohbet Seçin</h2>
          )}
        </div>
        <div className="chat-content">
          <MessageList messages={messages} selectedUser={selectedUser} />
          {selectedUser && (
            <MessageForm onSendMessage={handleSendMessage} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
