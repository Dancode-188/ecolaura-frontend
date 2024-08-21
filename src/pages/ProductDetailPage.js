import React from "react";
import { useParams } from "react-router-dom";
import SustainabilityScore from "../components/products/SustainabilityScore/SustainabilityScore";
import EcoImpactBadge from "../components/products/EcoImpactBadge/EcoImpactBadge";
import ProductLifecycle from "../components/products/ProductLifecycle/ProductLifecycle";
import AddToCartButton from "../components/products/AddToCartButton/AddToCartButton";
import styles from "./ProductDetailPage.module.css";

// Mock product data (in a real app, this would come from an API)
const product = {
  id: 1,
  name: "Bamboo Toothbrush Set",
  price: 12.99,
  description:
    "A set of 4 eco-friendly bamboo toothbrushes with charcoal-infused bristles.",
  sustainabilityScore: 95,
  image: "bamboo-toothbrush.jpg",
  ecoImpact: {
    score: 95,
    plasticSaved: 30,
    co2Reduced: 0.5,
  },
  lifecycle: [
    {
      stage: "Materials",
      description: "Sustainably sourced bamboo and recyclable nylon bristles",
    },
    {
      stage: "Production",
      description: "Made using renewable energy in a zero-waste facility",
    },
    {
      stage: "Packaging",
      description: "Minimal recycled and biodegradable packaging",
    },
    { stage: "Use", description: "Long-lasting and naturally antimicrobial" },
    {
      stage: "End of Life",
      description: "Compostable handle, recyclable bristles",
    },
  ],
};

const ProductDetailPage = () => {
  const { id } = useParams();
  // In a real app, you would fetch the product data based on the id

  return (
    <div className={styles.productDetailPage}>
      <div className={styles.productImage}>
        <img src={`/images/products/${product.image}`} alt={product.name} />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        <div className={styles.sustainabilityInfo}>
          <SustainabilityScore score={product.sustainabilityScore} />
          <EcoImpactBadge impact={product.ecoImpact} />
        </div>
        <p className={styles.productDescription}>{product.description}</p>
        <AddToCartButton product={product} />
        <ProductLifecycle lifecycle={product.lifecycle} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
