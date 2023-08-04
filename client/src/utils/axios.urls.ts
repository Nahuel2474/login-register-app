import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const fetchProducts = async () => {
  const res = await instance.get("/get-all-products");
  const data = await res.data;
  return data;
};

export const getPrdouct = async (id: string) => {
  const res = await instance.get("/get-product?id=" + id);
  const data = await res.data;
  return data;
};

