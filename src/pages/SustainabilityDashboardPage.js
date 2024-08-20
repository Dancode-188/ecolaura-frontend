import React from "react";
import ImpactSummary from "../components/sustainability/ImpactSummary/ImpactSummary";
import EcoChallenge from "../components/sustainability/EcoChallenge/EcoChallenge";
import SustainabilityTips from "../components/sustainability/SustainabilityTips/SustainabilityTips";
import styles from "./SustainabilityDashboardPage.module.css";

// Mock data (in a real app, this would come from an API)
const userImpact = {
  totalPurchases: 15,
  carbonSaved: 75.5, // in kg
  plasticReduced: 3.2, // in kg
  waterConserved: 1250, // in liters
};

const currentChallenge = {
  name: "Plastic-Free Week",
  description: "Avoid single-use plastics for a week",
  progress: 70, // percentage
  daysLeft: 2,
};

const SustainabilityDashboardPage = () => {
  return (
    <div className={styles.sustainabilityDashboard}>
      <h1 className={styles.title}>Your Sustainability Dashboard</h1>
      <div className={styles.content}>
        <ImpactSummary impact={userImpact} />
        <div className={styles.sideContent}>
          <EcoChallenge challenge={currentChallenge} />
          <SustainabilityTips />
        </div>
      </div>
    </div>
  );
};

export default SustainabilityDashboardPage;
