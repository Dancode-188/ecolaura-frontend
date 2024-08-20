import React, { useState } from "react";
import ProductList from "../components/products/ProductList/ProductList";
import ProductFilter from "../components/products/ProductFilter/ProductFilter";
import styles from "./ProductListPage.module.css";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Bamboo Toothbrush Set",
    price: 12.99,
    category: "Bathroom",
    sustainabilityScore: 95,
  },
  {
    id: 2,
    name: "Reusable Water Bottle",
    price: 24.99,
    category: "Kitchen",
    sustainabilityScore: 90,
  },
  {
    id: 3,
    name: "Organic Cotton Bedding",
    price: 89.99,
    category: "Bedroom",
    sustainabilityScore: 85,
  },
  {
    id: 4,
    name: "Solar-Powered Lantern",
    price: 34.99,
    category: "Living Room",
    sustainabilityScore: 92,
  },
  // Add more products as needed
];

const ProductListPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filters) => {
    // Implement filtering logic here
    // For now, we'll just log the filters
    console.log("Filters applied:", filters);
    // In a real application, you would filter the products based on these criteria
    // and update the filteredProducts state
  };

  return (
    <div className={styles.productListPage}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.content}>
        <ProductFilter onFilter={handleFilter} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductListPage;
