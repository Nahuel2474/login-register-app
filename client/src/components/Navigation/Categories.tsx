import React from "react";
import { useOutside } from "../../hooks";

export const Categories = () => {
  const [display, setDisplay] = React.useState(false);
  const modal = React.useRef<HTMLLIElement>(null);
  useOutside(modal, setDisplay);
  return (
    <li ref={modal} className="relative">
      <span
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Categories
      </span>
      {display && (
          <div className="z-50  absolute top-10 -left-6 w-80  bg-slate-50">
            <ul className="grid grid-cols-2 px-5 py-1   border-[1px] border-sky-200  [&>li]:my-1">
              <li className="hover:text-[#ccc] ">Todos</li>
              <li>Sweaters y Buzos</li>
              <li>Pantalones</li>
              <li>Remeras</li>
              <li>Sacos y Blazers</li>
              <li>Abrigos</li>
              <li>Blusas</li>
              <li>Camisas</li>
            </ul>
          </div>
      )}
    </li>
  );
};
