import axios from "axios";
import React, { type SetStateAction } from "react";
import { formValidate } from "../../joi";
import { handleSuccess, handleWarn } from "../../utils";
const style = {
  button:
    "ml-3 duration-300 mt-5 hover:bg-slate-800 hover:text-white font-extrabold border-2 border-sky-950 w-full p-3",
  input:
    "h-7 text-center font-light border-[1px] border-cyan-400 rounded-xl bg-transparent outline-none",
};

export const Login = ({ setChangeForm, changeform }: { setChangeForm: React.Dispatch<SetStateAction<boolean>>, changeform: boolean }) => {
  const form = React.useRef<HTMLFormElement | null >(null)

  const handleForm = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(form.current as HTMLFormElement);
    const values = Object.fromEntries(formData);
    const { error } = formValidate.validate(values);

    if (error != null) {
      console.log("error", error);
      return;
    }

    axios
      .post("http://localhost:3000/api/login", values)
      .then((res) => {
        const data = res.data;
        setChangeForm(!changeform)
        handleSuccess({ label: 'Login Successfully' })
        console.log(data);
      })
      .catch((error) => {
        handleWarn({ label: 'Error has ocurred!' })
        console.error(error);
      });
  };
  return (
    <form className="flex flex-col my-2 mt-20">
      <h4 className="text-center font-bold text-xl italic">Login</h4>
      <div className="grid my-2">
        <label className="text-sm">email:</label>
        <input name="email" type="text" className={style.input} />
      </div>

      <div className="grid my-2">
        <label className="text-sm">username:</label>
        <input className={style.input} name="user" type="text" />
      </div>
      <div className="grid my-2">
        <label className="text-sm" htmlFor="password">
          password:
        </label>
        <input type="password" name="password" className={style.input} />
      </div>

      <button type="submit" className={style.button}>
        Login
      </button>
    </form>
  );
};
