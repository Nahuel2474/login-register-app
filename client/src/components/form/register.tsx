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

export const Register = ({
  setChangeForm,
  changeform,
}: {
  setChangeForm: React.Dispatch<SetStateAction<boolean>>
  changeform: boolean
}) => {
  const form = React.useRef<HTMLFormElement | null>(null);

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
      .post("http://localhost:3000/api/register", values)
      .then((res) => {
        const data = res.data;
        setChangeForm(!changeform)
        handleSuccess({ label: 'User register correctly!' })
        console.log(data);
      })
      .catch((error) => {
        handleWarn({ label: 'Error has ocurred!' })
        console.error(error);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={(event) => {
        handleForm(event);
      }}
      className="mt-20  [&>div]:flex [&>div]:flex-col [&>div]:my-2"
    >
      <h4 className="text-center font-bold text-xl italic">Register</h4>

      <div>
        <label htmlFor="">user</label>
        <input name="user" type="text" className={style.input} />
      </div>

      <div>
        <label htmlFor="">email</label>
        <input name="email" type="email" className={style.input} />
      </div>

      <div>
        <label htmlFor="">password</label>
        <input name="password" type="password" className={style.input} />
      </div>

      <button className={style.button} type="submit">
        Register
      </button>
    </form>
  );
};
