import * as React from "react";
import { Link } from "react-router-dom";
import { Payment, Product } from "./components";
import type { productsAttributes } from "./types";
import { fetchProducts } from "./utils/axios.urls";
import bannerOne from "/banner/Home.png";

const style = {
  containerProduct:
    " grid-cols-fill-40 gap-20 grid justify-center w-[90%] mx-auto my-20",
};

const App = () => {
  const [products, setProducts] = React.useState<productsAttributes[]>([]);

  React.useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <header className="w-full h-screen ">
        <img className="w-screen h-full" src={bannerOne} />
      </header>
      <Payment />

      <section className={style.containerProduct}>
        <Product products={products.slice(0, 4)} />
      </section>

      <div className="my-20 flex justify-center">
        <Link
          className="
          hover:bg-cyan-400 duration-300
          border-2 border-cyan-400 p-4 font-light"
          to="/products/page/1"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default App;
