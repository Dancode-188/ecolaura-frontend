import React, { useState } from "react";
import styles from "./ProductFilter.module.css";

const ProductFilter = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minSustainabilityScore, setMinSustainabilityScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ category, minPrice, maxPrice, minSustainabilityScore });
  };

  return (
    <form className={styles.productFilter} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Filter Products</h2>
      <div className={styles.filterGroup}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Bathroom">Bathroom</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Living Room">Living Room</option>
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="minSustainabilityScore">
          Min Sustainability Score:
        </label>
        <input
          type="number"
          id="minSustainabilityScore"
          value={minSustainabilityScore}
          onChange={(e) => setMinSustainabilityScore(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.filterButton}>
        Apply Filters
      </button>
    </form>
  );
};

export default ProductFilter;
