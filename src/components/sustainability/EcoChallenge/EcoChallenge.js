import React from "react";
import styles from "./EcoChallenge.module.css";

const EcoChallenge = ({ challenge }) => {
  return (
    <div className={styles.ecoChallenge}>
      <h2 className={styles.title}>Current Eco-Challenge</h2>
      <h3 className={styles.challengeName}>{challenge.name}</h3>
      <p className={styles.description}>{challenge.description}</p>
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${challenge.progress}%` }}
        ></div>
      </div>
      <p className={styles.progressText}>{challenge.progress}% Complete</p>
      <p className={styles.daysLeft}>{challenge.daysLeft} days left</p>
    </div>
  );
};

export default EcoChallenge;
