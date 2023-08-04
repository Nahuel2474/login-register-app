import { Link } from "react-router-dom";
import { Product, Sidenav } from "../../components";
import { type productProps } from "../../types";


export const ProductView = ({ props }: productProps) => {
  return (
    <div>
      <section className="flex pt-32">
        <Sidenav />

        <div className="grid grid-cols-fill-40 ml-32 w-full justify-items-center">
          <Product products={props.products.slice(props.startIndex, props.lastIndex)} />
        </div>
      </section>
      <nav className="flex justify-center [&>ul>li]:mx-5 mt-5 mb-10">
        <ul className="flex">
          {Array.from({
            length: Math.ceil(props.totalProducts / props.productsPerPage),
          }).map((_, index) => (
            <li
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              key={index + 1}
            >
              <Link to={`/products/page/${index + 1}`}>{index + 1}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
