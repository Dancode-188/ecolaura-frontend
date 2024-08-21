import React from "react";
import styles from "./EcoImpactBadge.module.css";

const EcoImpactBadge = ({ impact }) => {
  const getImpactLevel = (score) => {
    if (score >= 80) return "high";
    if (score >= 60) return "medium";
    return "low";
  };

  const impactLevel = getImpactLevel(impact.score);

  return (
    <div className={`${styles.badge} ${styles[impactLevel]}`}>
      <span className={styles.score}>{impact.score}</span>
      <span className={styles.label}>Eco Impact</span>
      <div className={styles.details}>
        {impact.plasticSaved && (
          <p>Saves up to {impact.plasticSaved}g of plastic</p>
        )}
        {impact.co2Reduced && <p>Reduces CO2 by up to {impact.co2Reduced}kg</p>}
        {impact.waterSaved && (
          <p>Conserves up to {impact.waterSaved}L of water</p>
        )}
      </div>
    </div>
  );
};

export default EcoImpactBadge;
