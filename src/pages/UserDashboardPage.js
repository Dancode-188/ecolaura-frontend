import React from "react";
import PurchaseHistory from "../components/user/PurchaseHistory/PurchaseHistory";
import SustainabilityImpact from "../components/user/SustainabilityImpact/SustainabilityImpact";
import ProductRecommendations from "../components/user/ProductRecommendations/ProductRecommendations";
import styles from "./UserDashboardPage.module.css";

// Mock user data (in a real app, this would come from an API)
const userData = {
  name: "Jane Doe",
  purchaseHistory: [
    { id: 1, name: "Bamboo Toothbrush Set", date: "2023-05-15", price: 12.99 },
    { id: 2, name: "Reusable Water Bottle", date: "2023-06-02", price: 24.99 },
    // Add more purchase history items...
  ],
  sustainabilityImpact: {
    carbonSaved: 50, // in kg
    plasticAvoided: 5, // in kg
    waterConserved: 1000, // in liters
  },
  recommendations: [
    {
      id: 3,
      name: "Solar-Powered Charger",
      price: 39.99,
      sustainabilityScore: 92,
    },
    {
      id: 4,
      name: "Organic Cotton Towels",
      price: 29.99,
      sustainabilityScore: 88,
    },
    // Add more recommendations...
  ],
};

const UserDashboardPage = () => {
  return (
    <div className={styles.userDashboard}>
      <h1 className={styles.title}>Welcome, {userData.name}</h1>
      <div className={styles.dashboardContent}>
        <SustainabilityImpact impact={userData.sustainabilityImpact} />
        <PurchaseHistory purchases={userData.purchaseHistory} />
        <ProductRecommendations recommendations={userData.recommendations} />
      </div>
    </div>
  );
};

export default UserDashboardPage;
