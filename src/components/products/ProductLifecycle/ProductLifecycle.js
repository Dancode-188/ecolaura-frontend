import React from "react";
import styles from "./ProductLifecycle.module.css";

const ProductLifecycle = ({ lifecycle }) => {
  return (
    <div className={styles.productLifecycle}>
      <h2 className={styles.title}>Product Lifecycle</h2>
      <ul className={styles.lifecycleList}>
        {lifecycle.map((stage, index) => (
          <li key={index} className={styles.lifecycleStage}>
            <h3 className={styles.stageTitle}>{stage.stage}</h3>
            <p className={styles.stageDescription}>{stage.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductLifecycle;
