import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const URL_API = "https://itx-frontend-test.onrender.com/api/product";

export const api = axios.create({
  baseURL: URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProducts = (queryParams) => {
  return api.get("", {params:queryParams});
};

export const useAllProductsData = (onSuccess, onError, queryParams) => {


  return useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts(queryParams),
    onSuccess:onSuccess,
    onError:onError
  });
};
