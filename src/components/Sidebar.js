import React from "react";
import "../pages/ChatPage.css";

function Sidebar({ onSelectUser, fetchMessages, updateMessages, updateChatScreen }) {
  const users = [
    { id: 1, name: "John " },
    { id: 2, name: "Jane " },
    { id: 3, name: "Alice " },
    { id: 4, name: "Bob " },
  ];

  const handleUserClick = (user) => {
    fetchMessages(user.id)
      .then((messages) => {
        updateMessages(messages);
        updateChatScreen(user);
      })
      .catch((error) => {
        console.error("Mesajları getirirken bir hata oluştu:", error);
      });
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Kullanıcılar</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item" onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;