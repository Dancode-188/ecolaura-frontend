import React from "react";
import { Link } from "react-router-dom";
import SustainabilityScorecard from "../SustainabilityScorecard/SustainabilityScorecard";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const scorecardDetails = [
    { label: "Carbon Footprint", value: product.carbonFootprint + " kg" },
    { label: "Water Usage", value: product.waterUsage + " L" },
  ];

  return (
    <div className={styles.productCard}>
      <img
        src={`/images/products/${product.image}`}
        alt={product.name}
        className={styles.productImage}
      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      <SustainabilityScorecard
        score={product.sustainabilityScore}
        details={scorecardDetails}
      />
      <Link to={`/products/${product.id}`} className={styles.viewButton}>
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
