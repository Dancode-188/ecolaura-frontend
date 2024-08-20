import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Ecolaura
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/sustainability">Sustainability</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <Link to="/cart" className={styles.cartIcon}>
            Cart
          </Link>
          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
