import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="z-10 flex bg-black bg-opacity-75 items-center justify-between flex-row fixed top-0 w-full p-7">
      <span className="text-2xl font-semibold"><a href="/">Ruben Arevalo</a></span>
      <span className="text-lg font-thin max-sm:hidden">
        <ul className="flex flex-row gap-2 cursor-pointer">
          <li>
            <Link href="#home" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black">Home</Link>
          </li>
          <li>
            <Link href="#about" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black">About</Link>
          </li>
          <li>
            <Link href="#education" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black">Education</Link>
          </li>
          <li>
            <Link href="#experience" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black">Experience</Link>
          </li>
          <li>
            <Link href="#projects" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black">Projects</Link>
          </li>
        </ul>
      </span>
    </nav>
  );
};

export default Nav;
