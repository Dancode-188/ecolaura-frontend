import React, { useState } from "react";
import styles from "./AdvancedFilter.module.css";

const AdvancedFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    minSustainabilityScore: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  return (
    <form className={styles.advancedFilter} onSubmit={handleSubmit}>
      <h3>Advanced Filters</h3>
      <div className={styles.filterGroup}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleInputChange}
        >
          <option value="">All Categories</option>
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="living">Living Room</option>
          <option value="outdoor">Outdoor</option>
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="minSustainabilityScore">
          Min Sustainability Score:
        </label>
        <input
          type="number"
          id="minSustainabilityScore"
          name="minSustainabilityScore"
          min="0"
          max="100"
          value={filters.minSustainabilityScore}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className={styles.applyButton}>
        Apply Filters
      </button>
    </form>
  );
};

export default AdvancedFilter;
