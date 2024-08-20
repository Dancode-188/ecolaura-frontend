import React from "react";
import styles from "./SustainabilityTips.module.css";

const tips = [
  "Use a reusable water bottle instead of buying plastic bottles.",
  "Opt for products with minimal or recyclable packaging.",
  "Turn off lights and unplug electronics when not in use.",
  "Choose energy-efficient appliances for your home.",
  "Start composting your food waste to reduce landfill contributions.",
];

const SustainabilityTips = () => {
  return (
    <div className={styles.sustainabilityTips}>
      <h2 className={styles.title}>Eco-Friendly Tips</h2>
      <ul className={styles.tipList}>
        {tips.map((tip, index) => (
          <li key={index} className={styles.tip}>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SustainabilityTips;
