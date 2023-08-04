import { productStore } from "../store";
import { type productsAttributes } from "../types";

export const useProductStore = () => {
  const dispatch = productStore();

  const image = dispatch.image;
  const product = dispatch.product;
  const count = dispatch.count;
  const waist = dispatch.selectedWaist;
  const color = dispatch.selectedColor;

  const setImage = (src: string) => {
    dispatch.setImage(src)
  }

  const setProduct = (product: productsAttributes) => {
    dispatch.setProduct(product)
  }

  const setColor = (color: string) => {
    dispatch.setSelectedColor(color)
  }

  const setWaist = (waist: string) => {
    dispatch.setSelectedWaist(waist)
  }

  const setCount = (count: number) => {
    dispatch.setCount(count)
  }

  return {
    setImage,
    setProduct,
    setColor,
    setCount,
    setWaist,
    image,
    product,
    count,
    waist,
    color
  }
}
