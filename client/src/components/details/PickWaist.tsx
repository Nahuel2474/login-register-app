import { useProductStore } from "../../hooks";
import { pickOptions } from "../../utils";

export const PickWaist = () => {
  const { product, setColor, setWaist, waist } = useProductStore();

  return (
    <div>
      <h4>Waist</h4>
      <ul className="flex mt-2">
        {product?.waist?.split(",").map((el: string) => (
          <li
            onClick={(event) => {
              pickOptions(event, "waist", setColor, setWaist);
            }}
            className={` cursor-pointer list-none w-10 border-2 border-sky-300 text-center mr-5 ${
              el === waist ? "bg-cyan-400" : ""
            }`}
            key={el}
            data-waist={el}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
