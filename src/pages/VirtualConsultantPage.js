import React, { useState } from "react";
import ChatInterface from "../components/sustainability/ChatInterface/ChatInterface";
import ProductRecommendations from "../components/sustainability/ProductRecommendations/ProductRecommendations";
import styles from "./VirtualConsultantPage.module.css";

const VirtualConsultantPage = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleSendMessage = (message) => {
    // In a real app, this would send the message to a backend API
    // and receive a response. For now, we'll just echo the message.
    const botResponse = `Thanks for your message: "${message}". How else can I help you with sustainable living?`;
    setChatHistory([...chatHistory, { user: message, bot: botResponse }]);

    // Simulate product recommendations based on the chat
    // In a real app, this would come from the backend
    setRecommendations([
      {
        id: 1,
        name: "Eco-friendly Water Filter",
        price: 39.99,
        sustainabilityScore: 92,
      },
      {
        id: 2,
        name: "Solar-powered Phone Charger",
        price: 29.99,
        sustainabilityScore: 88,
      },
    ]);
  };

  return (
    <div className={styles.virtualConsultantPage}>
      <h1 className={styles.title}>Virtual Sustainability Consultant</h1>
      <div className={styles.content}>
        <ChatInterface
          chatHistory={chatHistory}
          onSendMessage={handleSendMessage}
        />
        <ProductRecommendations recommendations={recommendations} />
      </div>
    </div>
  );
};

export default VirtualConsultantPage;
