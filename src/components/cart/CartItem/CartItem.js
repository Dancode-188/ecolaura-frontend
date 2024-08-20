import React from "react";
import SustainabilityScore from "../../products/SustainabilityScore/SustainabilityScore";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <img
        src={`/images/products/${item.id}.jpg`}
        alt={item.name}
        className={styles.image}
      />
      <div className={styles.details}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
        <SustainabilityScore score={item.sustainabilityScore} />
      </div>
      <div className={styles.quantity}>
        <button className={styles.quantityButton}>-</button>
        <span>{item.quantity}</span>
        <button className={styles.quantityButton}>+</button>
      </div>
      <button className={styles.removeButton}>Remove</button>
    </div>
  );
};

export default CartItem;
