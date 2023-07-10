import { useContext, useState, useEffect } from "react";
import style from "./productlist.module.css";
import Product from "./product";
import { handleSearch } from "../../utils/utils";
import { Skeleton } from "@mui/material";
import { LOADING_ELEMENTS_ARR } from "../../utils/utils";
import Context from "../../Context";

const ProductList = () => {
  const {
    allProductsData,
    allProductsIsLoading,
    allProductsIsError,
    screenSize,
  } = useContext(Context);

  const [products, setProducts] = useState([
    {
      id: "",
      imgUrl: "",
      brand: "",
      model: "",
      price: "",
    },
  ]);

  useEffect(() => {
    setProducts(allProductsData);
  }, [allProductsData]);

  console.log(allProductsData)

  const allProductsElements = products?.map((prod) => {
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
    <section>
      <div className={style.searchBarContainer}>
        <label htmlFor="search-input">
          <p>Search</p>
          <input
            onChange={(e) => {
              if (!e.target.value) {
                setProducts(allProductsData);
                return;
              }
              setProducts(handleSearch(allProductsData, e.target.value))
            }}
            id="search-input"
            className={style.searchInput}
            type="text"
            placeholder="Type in a brand or model"
          />
        </label>
      </div>
      <div className={style.productList}>
        {allProductsIsLoading
          ? LOADING_ELEMENTS_ARR.map((element) => (
              <Skeleton
                key={element}
                className={style.skeleton}
                variant="rectangular"
              />
            ))
          : allProductsElements}
      </div>
    </section>
  );
};

export default ProductList;
