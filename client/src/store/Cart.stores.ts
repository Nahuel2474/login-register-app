import { create } from 'zustand';
import type { productsAttributes } from "../types";

interface CartState {
  products: productsAttributes[] | undefined
}

interface CartMethods extends CartState {
  addProduct: (payload: productsAttributes) => void
  deleteProduct: (payload: string) => void
};

export const cartStore = create<CartMethods>((set) => ({
  products: [],
  show: false,

  addProduct: (payload) => {
    set((state) => {
      const existingProduct = state.products?.find((product) => product.id === payload.id);

      if (existingProduct != null) {
        // If the product exists in the cart, update the quantity (qty)
        return {
          ...state,
          products: state.products?.map((product) =>
            product.id === payload.id ? { ...product, count: (product.count ?? 0) + 1 } : product
          ),
        };
      }
      // If the product does not exist in the cart, add it with qty = 1
      return {
        ...state,
        products: (state.products != null) ? [...state.products, payload] : [payload],
      };
    });
  },

  deleteProduct: (payload) => {
    set((state) => ({
      ...state,
      products: state.products?.filter((product) => product.id !== payload),
    }));
  },

}))
