import * as React from "react";
import { Link } from "react-router-dom";
import type { productsAttributes } from "../types";

const Product = ({ products }: { products: productsAttributes[] }) => {
  const [hoveredProduct, setHoveredProduct] = React.useState<number | null>(
    null
  );

  return (
    <>
      {products.map((el) => (
        <article
          key={el.name}
          className="relative flex flex-col items-center my-5 transition-all w-64"
        >
          {el.isNew === 1 && (
            <p className=" bg-sky-400 text-sm italic font-light p-1 px-3 right-0 absolute z-20">
              New
            </p>
          )}

          <p
            className={`z-10 bg-sky-950 text-sm italic font-bold p-1 px-3 left-0 text-white absolute ${
              el.offer === "" ? "hidden" : ""
            }`}
          >
            {el.offer}
          </p>

          <Link to={`/product/${el.id ?? ''}`}>
            <img
              onMouseOver={() => {
                setHoveredProduct(Number(el.id));
              }}
              onMouseOut={() => {
                setHoveredProduct(null);
              }}
              src={Number(el.id) === hoveredProduct ? el.imageHover : el.image}
              className="h-96 w-64 animate-fade animate-once"
              alt=""
            />
          </Link>

          <div>
            <h4 className="mt-2 font-light text-xl">{el.name}</h4>

            <div className="[&>p]:mx-2 [&>p]:mt-1 font-bold text-center flex justify-center ">
              <p className="line-through text-cyan-700">$ {Number(el.price) + 79}</p>{" "}
              <p>$ {el.price}</p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Product;
