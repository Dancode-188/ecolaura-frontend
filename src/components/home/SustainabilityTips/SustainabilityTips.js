import React, { useState } from "react";
import styles from "./SustainabilityTips.module.css";

const tips = [
  "Use a reusable water bottle instead of buying plastic bottles.",
  "Opt for products with minimal or recyclable packaging.",
  "Turn off lights and unplug electronics when not in use.",
  "Choose energy-efficient appliances for your home.",
  "Start composting your food waste to reduce landfill contributions.",
  "Use cloth bags for grocery shopping instead of plastic bags.",
  "Take shorter showers to conserve water.",
  "Plant trees or support tree-planting initiatives.",
  "Reduce meat consumption and try plant-based meals.",
  "Use public transportation, bike, or walk when possible.",
];

const SustainabilityTips = () => {
  const [currentTip, setCurrentTip] = useState(0);

  const nextTip = () => {
    setCurrentTip((prevTip) => (prevTip + 1) % tips.length);
  };

  return (
    <div className={styles.sustainabilityTips}>
      <h2 className={styles.title}>Eco-Friendly Tip of the Day</h2>
      <p className={styles.tip}>{tips[currentTip]}</p>
      <button onClick={nextTip} className={styles.nextButton}>
        Next Tip
      </button>
    </div>
  );
};

export default SustainabilityTips;
