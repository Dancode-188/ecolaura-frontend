import React from "react";
import ProductCard from "../../products/ProductCard/ProductCard";
import styles from "./FeaturedProducts.module.css";

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Bamboo Toothbrush Set",
    price: 12.99,
    image: "bamboo-toothbrush.jpg",
    sustainabilityScore: 95,
  },
  {
    id: 2,
    name: "Reusable Water Bottle",
    price: 24.99,
    image: "water-bottle.jpg",
    sustainabilityScore: 90,
  },
  {
    id: 3,
    name: "Organic Cotton Bedding",
    price: 89.99,
    image: "cotton-bedding.jpg",
    sustainabilityScore: 85,
  },
  {
    id: 4,
    name: "Solar-Powered Lantern",
    price: 34.99,
    image: "solar-lantern.jpg",
    sustainabilityScore: 92,
  },
];

const FeaturedProducts = () => {
  return (
    <section className={styles.featuredProducts}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.productGrid}>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
