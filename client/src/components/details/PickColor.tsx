import { useProductStore } from "../../hooks";
import { pickOptions } from "../../utils";

export const PickColor = () => {
  const { product, setColor, setWaist, color } = useProductStore();
  return (
    <div className="mt-5">
    <h4>Color</h4>
    <ul className="flex mt-2">
      {product?.color?.split(",").map((el: string) => (
        <li
          onClick={(event) => {
            pickOptions(event, "color", setColor, setWaist);
          }}
          className={`list-none w-10 h-10 rounded-full text-center mr-5 ${
            el === "red"
              ? "bg-red-600"
              : el === "green"
              ? "bg-green-500"
              : "bg-yellow-300"
          } ${el === color ? "activeColor" : ""}`}
          key={el}
          data-color={el}
        ></li>
      ))}
    </ul>
  </div>
  )
}
