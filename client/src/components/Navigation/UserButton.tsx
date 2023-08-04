import React from "react";
import { useOutside } from "../../hooks";
import { Login } from "../form/Login";
import { Register } from "../form/register";
import { Close } from "../icons/Close";
import { UserIcon } from "../icons/User";

const style = {
  container:
    "absolute bg-slate-100 z-50 w-80 h-[60vh] p-5 right-0 top-0  drop-shadow-xl flex flex-col",
  button:
    "ml-3 duration-300 mt-5 hover:bg-slate-800 hover:text-white font-extrabold border-2 border-sky-950 w-full p-3",
  input:
    "h-7 text-center font-light border-[1px] border-cyan-400 rounded-xl bg-transparent outline-none",
};

export const UserButton = () => {
  const modal = React.useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = React.useState(false);
  const [changeform, setChangeForm] = React.useState(false);

  useOutside(modal, setDisplay);
  return (
    <div ref={modal} className="flex">
      <UserIcon setDisplay={setDisplay} display={display} />

      {display && (
        <section className={style.container}>
          <button
            className="absolute top-5 right-12"
            onClick={() => {
              setDisplay(false);
            }}
          >
            <Close />
          </button>

          {changeform ? <Login setChangeForm={setChangeForm} changeform={changeform} /> : <Register setChangeForm={setChangeForm} changeform={changeform} />}

          <button
            type="button"
            className="mt-3 underline-offset-2 underline text-center "
            onClick={() => {
              setChangeForm(!changeform);
            }}
          >
            {changeform ? "create account" : "login"}
          </button>
        </section>
      )}
    </div>
  );
};
