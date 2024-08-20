import React, { useState } from "react";
import styles from "./ResourceFilter.module.css";

const ResourceFilter = ({ onFilter }) => {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ difficulty, category });
  };

  return (
    <form className={styles.resourceFilter} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Filter Resources</h2>
      <div className={styles.filterGroup}>
        <label htmlFor="difficulty">Difficulty:</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Fashion">Fashion</option>
          <option value="Gardening">Gardening</option>
          <option value="Home">Home</option>
          <option value="Technology">Technology</option>
        </select>
      </div>
      <button type="submit" className={styles.filterButton}>
        Apply Filters
      </button>
    </form>
  );
};

export default ResourceFilter;
