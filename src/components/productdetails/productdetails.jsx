import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useSingleProductData } from "../../datafetching/api";
import styles from "./productdetails.module.css";
import IMAGE from "./imagecomponent/imagewithmodal.jsx";
import DESCRIPTION from "./descriptioncomponent/description";
import ACTIONS from "./actionscomponent/actions";
import Spinner from "../spinner/spinner";
import NotFound from "../notfound/notfound";

const ProductDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const onSuccess = () => {
    //perform action on success
  };

  const onError = (err) => {
    console.log(err);
  };

  const {
    data: singleProductRawData,
    isLoading: singleProductIsLoading,
    isError: singleProductIsError,
    error: singleProductError,
  } = useSingleProductData(onSuccess, onError, id);

  const singleProductData = singleProductRawData?.data;
  const {
    id: productId,
    brand,
    model,
    price,
    imgUrl,
    dimentions,
    weight,
    displayResolution,
    os,
    cpu,
    ram,
    primaryCamera,
    secondaryCmera,
    battery,
    options,
  } = singleProductData ?? {};

  const descriptionData = {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  };

  if (singleProductIsError) {
    return <Navigate to="/404" />;
  }

  if (singleProductIsLoading) {
    return (
      <section className={styles.productDetailsContainer}>
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.productDetailsContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.imgCol}>
          <div className={styles.gobackBtnContainer}>
            <button
              className={styles.gobackBtn}
              onClick={() => {
                navigate(-1);
              }}
            >
              Go back
            </button>
          </div>
          <IMAGE img={imgUrl} alt={`picture of ${model}`} />
          <span></span>
        </div>
        <div className={styles.infoCol}>
          <div className={styles.info}>
            <DESCRIPTION descriptionData={descriptionData} />
          </div>
          <div className={styles.actions}>
            <ACTIONS id={productId} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
