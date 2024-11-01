import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="z-10 flex bg-black bg-opacity-75 items-center justify-between flex-row fixed top-0 w-screen p-7">
      <span className="text-2xl max-sm:text-xl font-thin uppercase tracking-wide"><a href="/">Ruben Arevalo</a></span>
      <span className="text-lg font-thin max-sm:hidden">
        <ul className="flex flex-row gap-2 cursor-pointer">
          <li>
            <Link href="#home" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest">Home</Link>
          </li>
          <li>
            <Link href="#about" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest">About</Link>
          </li>
          <li>
            <Link href="#education" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest">Education</Link>
          </li>
          <li>
            <Link href="#experience" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest">Experience</Link>
          </li>
          <li>
            <Link href="#projects" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest">Projects</Link>
          </li>
        </ul>
      </span>
      <span className="text-lg font-thin max-sm:hidden">
        <ul className="flex flex-row gap-2 cursor-pointer">
          <li>
            <Link href="#privacy" className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-wide">Privacy Notice</Link>
          </li>
        </ul>
      </span>
    </nav>
  );
};

export default Nav;
