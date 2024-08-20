import React from "react";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({ product }) => {
  const handleAddToCart = () => {
    // In a real app, this would dispatch an action to add the product to the cart
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <button className={styles.addToCartButton} onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
