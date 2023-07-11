import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./productdetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <section className={styles.productDetailsContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.imgCol}>

        </div>
        <div className={styles.infoCol}>
            <div className={styles.info}>

            </div>
            <div className={styles.actions}>

            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
