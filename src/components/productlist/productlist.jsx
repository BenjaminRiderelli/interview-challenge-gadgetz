import { useContext } from "react";
import style from "./productlist.module.css";
import Product from "./product";
import { useAllProductsData } from "../../datafetching/api";
import { Skeleton } from "@mui/material";
import { LOADING_ELEMENTS_ARR } from "../../utils/utils";
import Context from "../../Context";

const ProductList = () => {
  const { allProductsData, allProductsIsLoading, allProductsIsError } =
    useContext(Context);

  const allProductsElements = allProductsData?.data.map((prod) => {
    const { id, brand, model, price, imgUrl } = prod;
    return (
      <Product
        key={id}
        id={id}
        imgUrl={imgUrl}
        brand={brand}
        model={model}
        price={price}
      />
    );
  });

  if (allProductsIsError)
    return (
      <section className={style.fullHeight}>
        <div className={style.errorCard}>
          <h1>Sorry, something went wrong :(</h1>
        </div>
      </section>
    );

  return (
    <section className={style.productList}>
      {allProductsIsLoading
        ? LOADING_ELEMENTS_ARR.map((element) => (
            <Skeleton
              key={element}
              className={style.skeleton}
              variant="rectangular"
            />
          ))
        : allProductsElements}
    </section>
  );
};

export default ProductList;
