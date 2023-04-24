import { baseAPI } from "../config/apiService";

export const api = {
    getProducts: () => {
        return baseAPI.get(`/products`);
      },
    
      getUsersById: (id) => {
        return baseAPI.get(`/products/${id}`);
      },


      getProducts: () => {
        return baseAPI.get(`/products`);
      },
      getProductsById: (id) => {
        return baseAPI.get(`/products/${id}`);
      },
      createProducts: (body) => {
        return baseAPI.post(`/products`, body);
      },
      updateProducts: (id, body) => {
        return baseAPI.put(`/products/${id}`, body);
      },
      deleteProducts: (id) => {
        return baseAPI.delete(`/products/${id}`);
      },
    }