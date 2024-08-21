import React, { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList/ProductList";
import AdvancedFilter from "../components/products/AdvancedFilter/AdvancedFilter";
import SortOptions from "../components/products/SortOptions/SortOptions";
import styles from "./ProductListPage.module.css";

// Mock product data (in a real app, this would come from an API)
const allProducts = [
  {
    id: 1,
    name: "Bamboo Toothbrush Set",
    price: 12.99,
    category: "bathroom",
    sustainabilityScore: 95,
    ecoImpact: {
      score: 95,
      plasticSaved: 30,
      co2Reduced: 0.5,
    },
  },
  {
    id: 2,
    name: "Reusable Water Bottle",
    price: 24.99,
    category: "kitchen",
    sustainabilityScore: 90,
    ecoImpact: {
      score: 90,
      plasticSaved: 167,
      waterSaved: 1000,
    },
  },
  {
    id: 3,
    name: "Organic Cotton Bedding",
    price: 89.99,
    category: "living",
    sustainabilityScore: 85,
    ecoImpact: {
      score: 90,
      plasticSaved: 167,
      waterSaved: 1000,
    },
  },
  {
    id: 4,
    name: "Solar-Powered Lantern",
    price: 34.99,
    category: "outdoor",
    sustainabilityScore: 92,
    ecoImpact: {
      score: 90,
      plasticSaved: 167,
      waterSaved: 1000,
    },
  },
  // Add more products...
];

const ProductListPage = () => {
  const [products, setProducts] = useState(allProducts);
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("relevance");

  useEffect(() => {
    let filteredProducts = [...allProducts];

    // Apply filters
    if (filters.category) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filters.category
      );
    }
    if (filters.minPrice) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price >= Number(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price <= Number(filters.maxPrice)
      );
    }
    if (filters.minSustainabilityScore) {
      filteredProducts = filteredProducts.filter(
        (p) => p.sustainabilityScore >= Number(filters.minSustainabilityScore)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "sustainability-desc":
        filteredProducts.sort(
          (a, b) => b.sustainabilityScore - a.sustainabilityScore
        );
        break;
      default:
        // 'relevance' - no sorting needed
        break;
    }

    setProducts(filteredProducts);
  }, [filters, sortOption]);

  return (
    <div className={styles.productListPage}>
      <h1 className={styles.title}>Our Eco-Friendly Products</h1>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <AdvancedFilter onFilterChange={setFilters} />
        </aside>
        <main className={styles.mainContent}>
          <SortOptions onSortChange={setSortOption} />
          <ProductList products={products} />
        </main>
      </div>
    </div>
  );
};

export default ProductListPage;
