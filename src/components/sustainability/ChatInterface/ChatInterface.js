import React, { useState } from "react";
import styles from "./ChatInterface.module.css";

const ChatInterface = ({ chatHistory, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className={styles.chatInterface}>
      <div className={styles.chatHistory}>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <p className={styles.userMessage}>{chat.user}</p>
            <p className={styles.botMessage}>{chat.bot}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about sustainable living..."
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
