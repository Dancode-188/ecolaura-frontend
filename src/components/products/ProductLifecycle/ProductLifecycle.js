import React from "react";
import styles from "./ProductLifecycle.module.css";

const ProductLifecycle = ({ stages }) => {
  return (
    <div className={styles.lifecycle}>
      <h3 className={styles.title}>Product Lifecycle</h3>
      <div className={styles.timeline}>
        {stages.map((stage, index) => (
          <div key={index} className={styles.stage}>
            <div className={styles.stageIcon}>{index + 1}</div>
            <div className={styles.stageContent}>
              <h4 className={styles.stageName}>{stage.name}</h4>
              <p className={styles.stageDescription}>{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLifecycle;
