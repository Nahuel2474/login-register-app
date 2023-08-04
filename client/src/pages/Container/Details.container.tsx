import * as React from "react";
import { useParams } from "react-router-dom";
import { useCartStore, useProductStore } from "../../hooks";
import type { productsAttributes } from "../../types";
import { changeStateImage, getPrdouct, handleSuccess, handleWarn, pickOptions } from "../../utils";
import { ViewDetails } from "../index";

export const ContainerDetails = () => {
  const { id } = useParams();
  const {
    setProduct,
    product,
    count,
    waist,
    color,
  } = useProductStore();

  const { addProduct } = useCartStore();

  React.useEffect(() => {
    getPrdouct(id ?? "")
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handleData = () => {
    if (waist === undefined) {
      handleWarn({ label: "Select a waist" });
      return;
    }
    if (color === undefined) {
      handleWarn({ label: "Select a color!", theme: "dark" });
      return;
    }

    const data = {
      ...product,
      count,
      color,
      waist,
    };
    addProduct(data as productsAttributes);
    handleSuccess({ label: 'Product has been added to cart!' })
  };

  const methods = {
    pickOptions,
    handleData,
    changeStateImage,
  };

  return <ViewDetails methods={methods} />;
};


