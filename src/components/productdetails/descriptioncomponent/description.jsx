import React from "react";
import styles from "./description.module.css";

const DESCRIPTION = ({ descriptionData }) => {
  const textFields = Object.keys(descriptionData).map((key) => {
    return (
      <div key={key} className={styles.textField}>
        <h3>{key}</h3>
        <p>
          {key === "price" ? "$" : ""}
          {descriptionData[key] ? descriptionData[key] : "N/A"}
        </p>
      </div>
    );
  });

  return <div className={styles.descriptionContainer}>{textFields}</div>;
};

export default DESCRIPTION;
