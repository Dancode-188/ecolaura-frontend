import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductRecommendations.module.css";

const ProductRecommendations = ({ recommendations }) => {
  return (
    <div className={styles.productRecommendations}>
      <h2 className={styles.title}>Recommended for You</h2>
      <ul className={styles.recommendationList}>
        {recommendations.map((product) => (
          <li key={product.id} className={styles.recommendationItem}>
            <Link to={`/products/${product.id}`} className={styles.productLink}>
              <span className={styles.productName}>{product.name}</span>
              <span className={styles.productPrice}>
                ${product.price.toFixed(2)}
              </span>
              <span className={styles.sustainabilityScore}>
                Sustainability Score: {product.sustainabilityScore}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRecommendations;
