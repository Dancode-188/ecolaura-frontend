import React from "react";
import styles from "./SustainabilityImpact.module.css";

const SustainabilityImpact = ({ impact }) => {
  return (
    <div className={styles.sustainabilityImpact}>
      <h2 className={styles.title}>Your Sustainability Impact</h2>
      <div className={styles.impactGrid}>
        <div className={styles.impactItem}>
          <span className={styles.impactValue}>{impact.carbonSaved}</span>
          <span className={styles.impactLabel}>kg of CO2 Saved</span>
        </div>
        <div className={styles.impactItem}>
          <span className={styles.impactValue}>{impact.plasticAvoided}</span>
          <span className={styles.impactLabel}>kg of Plastic Avoided</span>
        </div>
        <div className={styles.impactItem}>
          <span className={styles.impactValue}>{impact.waterConserved}</span>
          <span className={styles.impactLabel}>L of Water Conserved</span>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityImpact;
