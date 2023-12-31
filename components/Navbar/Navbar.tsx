import { useState } from "react";
import { navbarData } from "./NavbarData";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="fixed top-0 w-full bg-slate-500 items-center flex p-4 z-10">
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
        <AiOutlineMenu
          className="flex justify-end md:hidden cursor-pointer w-7 h-7"
          onClick={showNav}
        />

        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <Link
                  className="hover:text-sky-500"
                  href={"/"}
                  onClick={showNav}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className={`${
            toggle ? " flex" : " hidden"
          } text-indigo-800 hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gray-100 px-1 p-2 rounded-lg mt-4 w-24`}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
