import React from "react";
import styles from "./SustainabilityScorecard.module.css";

const SustainabilityScorecard = ({ score, details }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return styles.high;
    if (score >= 60) return styles.medium;
    return styles.low;
  };

  return (
    <div className={styles.scorecard}>
      <div className={`${styles.score} ${getScoreColor(score)}`}>{score}</div>
      <div className={styles.details}>
        {details.map((detail, index) => (
          <div key={index} className={styles.detailItem}>
            <span className={styles.detailLabel}>{detail.label}:</span>
            <span className={styles.detailValue}>{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilityScorecard;
