import React from "react";
import styles from "./SortOptions.module.css";

const SortOptions = ({ onSortChange }) => {
  return (
    <div className={styles.sortOptions}>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
        <option value="relevance">Relevance</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="sustainability-desc">
          Sustainability Score: High to Low
        </option>
      </select>
    </div>
  );
};

export default SortOptions;
