import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartSummary.module.css";

const CartSummary = ({ items }) => {
  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate estimated environmental impact (this is a simplified example)
  const plasticSaved = items.reduce(
    (sum, item) => sum + item.sustainabilityScore * 0.01 * item.quantity,
    0
  );
  const carbonReduced = items.reduce(
    (sum, item) => sum + item.sustainabilityScore * 0.05 * item.quantity,
    0
  );

  return (
    <div className={styles.cartSummary}>
      <h2 className={styles.title}>Cart Summary</h2>
      <div className={styles.row}>
        <span>Total Items:</span>
        <span>{totalItems}</span>
      </div>
      <div className={styles.row}>
        <span>Total Cost:</span>
        <span>${totalCost.toFixed(2)}</span>
      </div>
      <div className={styles.impactSection}>
        <h3 className={styles.impactTitle}>Estimated Environmental Impact</h3>
        <div className={styles.row}>
          <span>Plastic Saved:</span>
          <span>{plasticSaved.toFixed(2)} kg</span>
        </div>
        <div className={styles.row}>
          <span>Carbon Reduced:</span>
          <span>{carbonReduced.toFixed(2)} kg</span>
        </div>
      </div>
      <Link to="/checkout" className={styles.checkoutButton}>
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
