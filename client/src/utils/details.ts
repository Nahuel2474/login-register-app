import { type productsAttributes } from "../types";

export const pickOptions = (
  event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  type: string,
  setColor: (option: string) => void,
  setWaist: (option: string) => void,
) => {
  const target = event.target as HTMLLIElement;
  const option = target.getAttribute(`data-${type}`) ?? "";
  if (type === "color") {
    setColor(option);
  } else {
    setWaist(option);
  }
};

export const changeStateImage = (id: number, setImage: (src: string) => void, product: productsAttributes) => {
  const newImage = id === 1 ? product?.image : product?.imageHover;
  setImage(newImage ?? "");
};
