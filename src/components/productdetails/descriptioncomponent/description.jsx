import React from "react";
import styles from "./description.module.css";

const DESCRIPTION = ({ descriptionData }) => {
  const textFields = Object.keys(descriptionData).map((key) => {
    let fixedTitle = "";
    if (key === "primaryCamera") {
      fixedTitle = "Primary camera";
    } else if (key === "secondaryCmera") {
      fixedTitle = "Secondary camera";
    } else if (key === "displayResolution") {
      fixedTitle = "Display resolution";
    } else if (key === "os") {
      fixedTitle = "Operating system";
    } else {
      fixedTitle = key;
    }

    return (
      <div key={key} className={styles.textField}>
        <h3>{fixedTitle.charAt(0).toUpperCase() + fixedTitle.slice(1)}</h3>
        <p>
          {key === "price" ? "$" : ""}

          {descriptionData[key] ? descriptionData[key] : "N/A"}
          {key === "weight" ? " gr" : ""}
        </p>
      </div>
    );
  });

  return <div className={styles.descriptionContainer}>{textFields}</div>;
};

export default DESCRIPTION;
