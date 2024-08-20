import React from "react";
import { useCart } from "../../../context/CartContext";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <button className={styles.addToCartButton} onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
