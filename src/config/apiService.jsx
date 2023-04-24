import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://64384eee4660f26eb199f9ad.mockapi.io", 
//   menampung semua url api (url awal/ base url)
});

export const sheetDBAPI = axios.create({
  baseURL: "https://sheetdb.io/api/v1/8jombd5zduabl",
});