import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import styles from "./Header.module.css";

const Header = () => {
  const { cart } = useCart();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Ecolaura</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/diy-resources">DIY Resources</Link>
          </li>
          <li>
            <Link to="/consultant">Virtual Consultant</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.cartIcon}>
        <Link to="/cart">
          <span className={styles.cartText}>Cart</span>
          {cartItemCount > 0 && (
            <span className={styles.cartCount}>{cartItemCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
