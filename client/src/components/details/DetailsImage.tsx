import { useProductStore } from "../../hooks";
import { type productsAttributes } from "../../types";
import { changeStateImage } from "../../utils";

export const DetailsImage = ({ product }: { product: productsAttributes }) => {
  const { setImage, image } = useProductStore();
  return (
    <section className="flex">
      <div className="flex-col [&>img]:w-20 mx-5 [&>img]:mb-5">
        <img
          onClick={(e) => {
            changeStateImage(1, setImage, product);
          }}
          className={
            image === product?.image ? "border-2 border-cyan-400 " : ""
          }
          src={product?.imageHover}
          alt=""
        />
        <img
          onClick={(e) => {
            changeStateImage(2, setImage, product);
          }}
          className={
            image === product?.imageHover ? "border-2 border-cyan-400 " : ""
          }
          src={product?.image}
          alt=""
        />
      </div>

      <div>
        <img className="w-[30rem]" src={image ?? product?.image} alt="" />
      </div>
    </section>
  );
};
