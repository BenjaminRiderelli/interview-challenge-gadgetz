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
  return api.get("");
};

export const getProductById = (id) =>{
  return api.get(`/${id}`)
}

export const useAllProductsData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts(),
    onSuccess:onSuccess,
    onError:onError
  });
};

export const useSingleProductData = (onSuccess, onError, id) => {
  return useQuery({
    queryKey: ["product",{productid:id}],
    queryFn: () => getProductById(id),
    onSuccess:onSuccess,
    onError:onError
  });
};
