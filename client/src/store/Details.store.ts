import { create } from 'zustand';
import type { productsAttributes } from "../types";

interface ProductState {
  product: productsAttributes | undefined
  image: string | undefined
  selectedColor: string | undefined
  selectedWaist: string | undefined
  count: number
}

interface ProductMethods extends ProductState {
  setProduct: (payload: productsAttributes | undefined) => void
  setImage: (payload: string | undefined) => void
  setSelectedColor: (payload: string | undefined) => void
  setSelectedWaist: (payload: string | undefined) => void
  setCount: (payload: number) => void
};

export const productStore = create<ProductMethods>((set) => ({
  product: undefined,
  image: undefined,
  selectedColor: undefined,
  selectedWaist: undefined,
  count: 1,

  setImage: (payload) => {
    set((state) => ({
      ...state,
      image: payload,
    }));
  },

  setProduct: (payload) => {
    set((state) => ({
      ...state,
      product: payload
    }));
  },

  setSelectedColor: (payload) => {
    set((state) => ({
      ...state,
      selectedColor: payload
    }));
  },

  setSelectedWaist: (payload) => {
    set((state) => ({
      ...state,
      selectedWaist: payload,
    }));
  },

  setCount: (payload) => {
    set((state) => ({
      ...state,
      count: payload
    }));
  }
}));

