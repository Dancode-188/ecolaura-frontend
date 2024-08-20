import React from "react";
import styles from "./SustainabilityHighlights.module.css";

const highlights = [
  {
    id: 1,
    icon: "🌱",
    title: "Eco-Friendly Materials",
    description:
      "All our products are made from sustainable, responsibly sourced materials.",
  },
  {
    id: 2,
    icon: "♻️",
    title: "Zero Waste Packaging",
    description:
      "We use minimal, recyclable or biodegradable packaging for all shipments.",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Carbon Neutral",
    description:
      "We offset 100% of our carbon emissions from production and shipping.",
  },
  {
    id: 4,
    icon: "💧",
    title: "Water Conservation",
    description:
      "Our production processes are designed to minimize water usage and pollution.",
  },
];

const SustainabilityHighlights = () => {
  return (
    <section className={styles.sustainabilityHighlights}>
      <h2 className={styles.title}>Our Commitment to Sustainability</h2>
      <div className={styles.highlightsGrid}>
        {highlights.map((highlight) => (
          <div key={highlight.id} className={styles.highlight}>
            <span className={styles.icon}>{highlight.icon}</span>
            <h3 className={styles.highlightTitle}>{highlight.title}</h3>
            <p className={styles.highlightDescription}>
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SustainabilityHighlights;
