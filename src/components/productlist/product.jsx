import React from "react";
import { Link } from "react-router-dom";
import style from "./product.module.css";

const Product = ({ id, brand, model, price, imgUrl, isLoading }) => {
  return (
    <div className={style.cardContainer}>
      <img
        className={style.cardImg}
        src={imgUrl}
        alt={`${brand}-${model} picture`}
      />
      <div className={style.infoContainer}>
        <h3>
          <Link to={id}>{model}</Link>
        </h3>
        <p>{brand}</p>
        <p className={style.price}>${price ? price : "N/A"}</p>
      </div>
    </div>
  );
};

export default Product;
