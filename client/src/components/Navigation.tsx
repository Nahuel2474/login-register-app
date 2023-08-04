import * as React from "react";
import { Link } from "react-router-dom";
import { CartButton } from "./Navigation/CartButton";
import { Categories } from "./Navigation/Categories";
import { UserButton } from "./Navigation/UserButton";
import { SearchButon } from "./icons/SearchButon";
import logo from "/logo.png";

const style = {
  navContainer:
    " z-50 bg-slate-50 h-20 fixed w-full border-b-2 border-sky-200 ",
  justifyBetween: " flex items-center justify justify-between ",
  animation: " animate-duration-300 animate-jump-in animate-once  ",
};

const layout = {
  navContainer: style.justifyBetween + style.navContainer,
};

export const Navigation = () => {
  const [display, setDisplay] = React.useState(false);
  const modal = React.useRef<HTMLLIElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Node;
    if (modal.current !== null && !modal.current.contains(target)) {
      setDisplay(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className={layout.navContainer}>
      <ul className="flex [&>li]:ml-5 ml-24 ">
        <Categories />
      </ul>
      <Link to="/">
        <img src={logo} className="h-5" />
      </Link>

      <ul className="flex [&>li]:ml-5 mr-20">
        <li>
          <SearchButon />
        </li>
        <li>
          <UserButton />
        </li>

        <li className="relative">
          <CartButton />
        </li>
      </ul>
    </nav>
  );
};
