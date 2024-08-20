import React from "react";
import { useCart } from "../context/CartContext";
import CartItemList from "../components/cart/CartItemList/CartItemList";
import CartSummary from "../components/cart/CartSummary/CartSummary";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title}>Your Cart</h1>
      <div className={styles.content}>
        <CartItemList items={cart} />
        <CartSummary items={cart} />
      </div>
    </div>
  );
};

export default CartPage;
