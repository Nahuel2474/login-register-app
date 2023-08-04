import { Outlet } from "react-router-dom";
import { Navigation } from "./components";

export const Layout = () => {
  return (
    <main className="relative">
      <Navigation />
      <Outlet />
      <footer className=" cursor-default font-light  bg-slate-100 h-32 w-full text-sm flex items-center flex-col justify-center">
        <ul className="flex [&>li]:mx-2 my-2">
          <li>About</li>
          <li>Contact</li>
          <li>Terms and Policy</li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          magnam?
        </p>
      </footer>
    </main>
  );
};
