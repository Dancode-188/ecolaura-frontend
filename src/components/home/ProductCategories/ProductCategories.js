import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCategories.module.css";

const categories = [
  { id: 1, name: "Kitchen", image: "kitchen.jpg" },
  { id: 2, name: "Bathroom", image: "bathroom.jpg" },
  { id: 3, name: "Bedroom", image: "bedroom.jpg" },
  { id: 4, name: "Living Room", image: "living-room.jpg" },
];

const ProductCategories = () => {
  return (
    <section className={styles.productCategories}>
      <h2 className={styles.title}>Shop by Category</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link
            to={`/products?category=${category.id}`}
            key={category.id}
            className={styles.category}
          >
            <img
              src={`/images/categories/${category.image}`}
              alt={category.name}
              className={styles.image}
            />
            <h3 className={styles.categoryName}>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
