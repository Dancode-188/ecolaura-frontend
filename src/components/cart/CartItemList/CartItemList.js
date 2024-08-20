import React from "react";
import CartItem from "../CartItem/CartItem";
import styles from "./CartItemList.module.css";

const CartItemList = ({ items }) => {
  return (
    <div className={styles.cartItemList}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItemList;
