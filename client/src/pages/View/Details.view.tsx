import { DetailsImage, Detailsinfo, InputNumber, PickColor, PickWaist } from "../../components";
import { useProductStore } from "../../hooks";
import { type detailsProps } from "../../types";

export const ViewDetails = ({ methods }: detailsProps) => {
  const { product } = useProductStore();

  return (
      <section className="flex pt-32 mb-20 w-[90%] mx-auto relative">
        {product != null && (
          <>
            <DetailsImage product={product} />

            <div className="w-[40%] p-5 mx-auto">
              <Detailsinfo />
              <PickWaist />
              <PickColor />

              <div className="flex mt-10">
                <div>
                  <InputNumber />
                </div>
                <button
                  onClick={methods.handleData}
                  className="ml-3 duration-300 hover:bg-slate-800 hover:text-white font-extrabold border-2 border-sky-950 w-full"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </>
        )}
      </section>
  );
};

