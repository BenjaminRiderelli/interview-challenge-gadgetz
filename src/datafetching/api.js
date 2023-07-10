import axios from "axios";


const URL_API = 'https://itx-frontend-test.onrender.com/api/product'

export const api = axios.create({
    baseURL: URL_API,
    headers: {
      "Content-Type": "application/json",
    }
  });