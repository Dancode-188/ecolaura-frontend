import React from "react";
import styles from "./PurchaseHistory.module.css";

const PurchaseHistory = ({ purchases }) => {
  return (
    <div className={styles.purchaseHistory}>
      <h2 className={styles.title}>Recent Purchases</h2>
      <ul className={styles.purchaseList}>
        {purchases.map((purchase) => (
          <li key={purchase.id} className={styles.purchaseItem}>
            <span className={styles.purchaseName}>{purchase.name}</span>
            <span className={styles.purchaseDate}>{purchase.date}</span>
            <span className={styles.purchasePrice}>
              ${purchase.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseHistory;
