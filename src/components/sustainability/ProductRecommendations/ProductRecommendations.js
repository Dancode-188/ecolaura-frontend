import React from "react";
import ProductCard from "../../products/ProductCard/ProductCard";
import styles from "./ProductRecommendations.module.css";

const ProductRecommendations = ({ recommendations }) => {
  return (
    <div className={styles.productRecommendations}>
      <h2 className={styles.title}>Recommended Eco-Friendly Products</h2>
      {recommendations.length === 0 ? (
        <p className={styles.noRecommendations}>
          Chat with our consultant to get personalized product recommendations!
        </p>
      ) : (
        <div className={styles.recommendationList}>
          {recommendations.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductRecommendations;
