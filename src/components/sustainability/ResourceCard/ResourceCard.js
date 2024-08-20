import React from "react";
import styles from "./ResourceCard.module.css";

const ResourceCard = ({ resource }) => {
  return (
    <div className={styles.resourceCard}>
      <h3 className={styles.title}>{resource.title}</h3>
      <div className={styles.details}>
        <span className={styles.difficulty}>
          Difficulty: {resource.difficulty}
        </span>
        <span className={styles.category}>Category: {resource.category}</span>
        <span className={styles.duration}>Duration: {resource.duration}</span>
      </div>
      <button className={styles.viewButton}>View Guide</button>
    </div>
  );
};

export default ResourceCard;
