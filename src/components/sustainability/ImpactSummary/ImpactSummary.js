import React from "react";
import styles from "./ImpactSummary.module.css";

const ImpactSummary = ({ impact }) => {
  return (
    <div className={styles.impactSummary}>
      <h2 className={styles.title}>Your Environmental Impact</h2>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <h3 className={styles.statTitle}>Carbon Saved</h3>
          <p className={styles.statValue}>{impact.carbonSaved} kg</p>
        </div>
        <div className={styles.stat}>
          <h3 className={styles.statTitle}>Plastic Reduced</h3>
          <p className={styles.statValue}>{impact.plasticReduced} kg</p>
        </div>
        <div className={styles.stat}>
          <h3 className={styles.statTitle}>Water Conserved</h3>
          <p className={styles.statValue}>{impact.waterConserved} L</p>
        </div>
      </div>
      <p className={styles.totalPurchases}>
        Based on {impact.totalPurchases} eco-friendly purchases
      </p>
    </div>
  );
};

export default ImpactSummary;
