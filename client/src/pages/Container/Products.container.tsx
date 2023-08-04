import React from "react";
import { useParams } from "react-router-dom";
import type { productsAttributes } from "../../types";
import { fetchProducts } from "../../utils";
import { ProductView } from "../View/Product.view";

export const ProductContainer = () => {
  const [products, setProducts] = React.useState<productsAttributes[]>([]);
  const totalProducts = products.length;
  const { page } = useParams();
  const currentPage = parseInt(page ?? "1");

  const productsPerPage = 8;
  const startIndex = (currentPage - 1) * productsPerPage;
  const lastIndex = startIndex + productsPerPage;

  React.useEffect(() => {
    fetchProducts()
      .then((data: productsAttributes[]) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const props = {
    totalProducts,
    lastIndex,
    startIndex,
    products,
    productsPerPage
  }
  return <ProductView props={props} />
}

