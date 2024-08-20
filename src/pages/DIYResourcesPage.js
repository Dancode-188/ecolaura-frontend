import React, { useState } from "react";
import ResourceList from "../components/sustainability/ResourceList/ResourceList";
import ResourceFilter from "../components/sustainability/ResourceFilter/ResourceFilter";
import styles from "./DIYResourcesPage.module.css";

// Mock data for DIY resources
const allResources = [
  {
    id: 1,
    title: "Upcycling Old Jeans",
    difficulty: "Easy",
    category: "Fashion",
    duration: "1 hour",
  },
  {
    id: 2,
    title: "Building a Compost Bin",
    difficulty: "Medium",
    category: "Gardening",
    duration: "2 hours",
  },
  {
    id: 3,
    title: "Making Natural Cleaning Products",
    difficulty: "Easy",
    category: "Home",
    duration: "30 minutes",
  },
  {
    id: 4,
    title: "Creating a Vertical Garden",
    difficulty: "Hard",
    category: "Gardening",
    duration: "3 hours",
  },
  {
    id: 5,
    title: "DIY Solar Phone Charger",
    difficulty: "Medium",
    category: "Technology",
    duration: "1.5 hours",
  },
];

const DIYResourcesPage = () => {
  const [filteredResources, setFilteredResources] = useState(allResources);

  const handleFilter = (filters) => {
    const filtered = allResources.filter(
      (resource) =>
        (!filters.difficulty || resource.difficulty === filters.difficulty) &&
        (!filters.category || resource.category === filters.category)
    );
    setFilteredResources(filtered);
  };

  return (
    <div className={styles.diyResourcesPage}>
      <h1 className={styles.title}>DIY Sustainability Resources</h1>
      <div className={styles.content}>
        <ResourceFilter onFilter={handleFilter} />
        <ResourceList resources={filteredResources} />
      </div>
    </div>
  );
};

export default DIYResourcesPage;
