import React from "react";
import ResourceCard from "../ResourceCard/ResourceCard";
import styles from "./ResourceList.module.css";

const ResourceList = ({ resources }) => {
  return (
    <div className={styles.resourceList}>
      {resources.length === 0 ? (
        <p className={styles.noResources}>
          No resources match your filters. Try adjusting your criteria.
        </p>
      ) : (
        resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))
      )}
    </div>
  );
};

export default ResourceList;
