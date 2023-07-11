import React from "react";
import { useParams } from "react-router-dom";
import { useSingleProductData } from "../../datafetching/api";
import styles from "./productdetails.module.css";
import IMAGE from "./imagecomponent/imagewithmodal.jsx";
import DESCRIPTION from "./descriptioncomponent/description";
import ACTIONS from "./actionscomponent/actions";
import Spinner from "../spinner/spinner";
import NotFound from "../notfound/notfound";

const ProductDetails = () => {
  const { id } = useParams();

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
    networkTechnology,
    networkSpeed,
    gprs,
    edge,
    announced,
    status,
    dimentions,
    weight,
    sim,
    displayType,
    displayResolution,
    displaySize,
    os,
    cpu,
    chipset,
    gpu,
    externalMemory,
    internalMemory,
    ram,
    primaryCamera,
    secondaryCmera,
    speaker,
    audioJack,
    wlan,
    bluetooth,
    gps,
    nfc,
    radio,
    usb,
    sensors,
    battery,
    colors,
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
  return  <NotFound />;
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
          <IMAGE img={imgUrl} alt={`picture of ${model}`} />
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
