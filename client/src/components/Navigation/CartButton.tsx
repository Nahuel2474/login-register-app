import React from "react";
import { useCartStore, useOutside } from "../../hooks";
import Cart from "../icons/Cart";
import { Close } from "../icons/Close";

const style = {
  containerCartList:
    "absolute bg-slate-100 w-96 h-screen p-5 -right-20 -top-6  drop-shadow-xl grid",
  button:
    "ml-3 duration-300 hover:bg-slate-800 hover:text-white font-extrabold border-2 border-sky-950 w-full p-3",
};

export const CartButton = () => {
  const { products, deleteProduct } = useCartStore();
  const [display, setDisplay] = React.useState(false);
  const modal = React.useRef<HTMLDivElement | null>(null);
  useOutside(modal, setDisplay);

  return (
    <div ref={modal} className="flex">
      <button type="button">
        <Cart display={display} setDisplay={setDisplay} />
      </button>

      <span className="ml-1 text-sm cursor-default">{products?.length}</span>

      {display && (
        <div className={style.containerCartList}>
          <button
            onClick={() => {
              setDisplay(false);
            }}
            type="button"
            className="absolute right-10 top-5"
          >
            <Close />
          </button>

          <div className="mt-10 ">
            {products?.length === 0 && <p className="mt-5">No items here...</p>}
            {products != null && products?.length >= 1 && (
              <div>
                {products.map((item) => (
                  <section className="flex w-full" key={item.name}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-32 object-cover rounded-xl mr-3"
                    />
                    <div>
                      <h4 className="font-bold flex">{item.name}</h4>

                      <div className="font-ligth flex text-sm mt-3">
                        <p className="mr-4">Waist: {item.waist}</p>
                        <p>Color: {item.color}</p>
                      </div>
                      <div className="flex text-green-400 text-sm font-bold ">
                        <p>
                          {item.count} <span className="text-xs mx-1">x</span>{" "}
                        </p>
                        <p> {item.price}</p>
                      </div>

                      <div className="w-full text-xs mt-5 ">
                        <button
                          type="button"
                          onClick={() => {
                            deleteProduct(item.id ?? "");
                          }}
                          className="underline-offset-4 underline text-red-600 italic"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>

          <div className="mt-auto flex flex-col [&>button]:my-4">
            <button className={style.button}>View Cart</button>

            <button className={style.button}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};
