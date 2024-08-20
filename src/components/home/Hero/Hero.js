import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Ecolaura</h1>
        <p className={styles.subtitle}>Sustainable living made easy</p>
        <Link to="/products" className={styles.cta}>
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
