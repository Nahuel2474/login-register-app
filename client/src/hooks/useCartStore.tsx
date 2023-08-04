import { cartStore } from "../store";
import { type productsAttributes } from "../types";

export const useCartStore = () => {
  const dispatch = cartStore();

  const products = dispatch.products;

  const addProduct = (product: productsAttributes) => {
    dispatch.addProduct(product)
  }

  const deleteProduct = (id: string) => {
    dispatch.deleteProduct(id)
  }


  return { addProduct, deleteProduct, products }
}
