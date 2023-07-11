import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const URL_API = "https://itx-frontend-test.onrender.com/api";

export const api = axios.create({
  baseURL: URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProducts = (queryParams) => {
  return api.get("/product");
};

export const getProductById = (id) =>{
  return api.get(`/product/${id}`)
}

export const postOrder = (data) => {
  return api.post("/cart", data)
}

export const useAllProductsData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts(),
    onSuccess:onSuccess,
    onError:onError,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60
  });
};

export const useSingleProductData = (onSuccess, onError, id) => {
  return useQuery({
    queryKey: ["product",{productid:id}],
    queryFn: () => getProductById(id),
    onSuccess:onSuccess,
    onError:onError,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60
  });
};

export const useAddToCartMutation = (onSuccess, onError, data) =>{

  return useMutation({
    mutationFn:() => postOrder(data),
    onSuccess:onSuccess,
    onError:onError    
  })
}
