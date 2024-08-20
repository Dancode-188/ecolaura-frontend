import React from "react";
import CartItemList from "../components/cart/CartItemList/CartItemList";
import CartSummary from "../components/cart/CartSummary/CartSummary";
import styles from "./CartPage.module.css";

// Mock cart data (in a real app, this would come from a global state or context)
const cartItems = [
  {
    id: 1,
    name: "Bamboo Toothbrush Set",
    price: 12.99,
    quantity: 2,
    sustainabilityScore: 95,
  },
  {
    id: 2,
    name: "Reusable Water Bottle",
    price: 24.99,
    quantity: 1,
    sustainabilityScore: 90,
  },
];

const CartPage = () => {
  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title}>Your Cart</h1>
      <div className={styles.content}>
        <CartItemList items={cartItems} />
        <CartSummary items={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
