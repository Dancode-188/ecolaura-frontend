import React from "react";
import Hero from "../components/home/Hero/Hero";
import ProductCategories from "../components/home/ProductCategories/ProductCategories";
import FeaturedProducts from "../components/home/FeaturedProducts/FeaturedProducts";
import SustainabilityHighlights from "../components/home/SustainabilityHighlights/SustainabilityHighlights";
import SustainabilityTips from "../components/home/SustainabilityTips/SustainabilityTips";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <div className={styles.container}>
        <SustainabilityTips />
        <ProductCategories />
        <FeaturedProducts />
        <SustainabilityHighlights />
      </div>
    </div>
  );
};

export default HomePage;
