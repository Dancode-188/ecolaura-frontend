import React from "react";
import { Link } from "react-router-dom";
import SustainabilityScore from "../SustainabilityScore/SustainabilityScore";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={`/images/products/${product.image}`}
        alt={product.name}
        className={styles.productImage}
      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      <SustainabilityScore score={product.sustainabilityScore} />
      <Link to={`/products/${product.id}`} className={styles.viewButton}>
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
