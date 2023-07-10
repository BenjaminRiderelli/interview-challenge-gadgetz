import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const URL_API = "https://itx-frontend-test.onrender.com/api/product";

export const api = axios.create({
  baseURL: URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProducts = () => {
  return api.get();
};

export const useAllProductsData = (onSuccess, onError) => {


  return useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts(),
    onSuccess:onSuccess,
    onError:onError
  });
};
