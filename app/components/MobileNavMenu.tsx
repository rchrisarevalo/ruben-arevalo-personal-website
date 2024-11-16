import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

interface MobileNavMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ open, setOpen }) => {
  
   const closeMenu = () => {
    setOpen(false)
   }

   return (
    <nav
      className={
        open
          ? "transition duration-75 ease-in-out fixed left-[0%] flex items-center justify-between z-20 bg-black opacity-85 w-full h-full overflow-y-hidden"
          : "transition duration-75 ease-in-out fixed left-[100%] flex items-center justify-between z-20 bg-black opacity-85 w-full h-full overflow-y-hidden"
      }
    >
      <span className="fixed flex top-0 p-6 w-full justify-end">
        <IoClose size={35} className="cursor-pointer" onClick={closeMenu} />
      </span>
      <ul className="opacity-100 flex flex-col gap-10 items-center justify-center w-full">
        <li>
          <Link
            className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest text-[16px]"
            href="#"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest text-[16px]"
            href="#about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest text-[16px]"
            href="#education"
            onClick={() => setOpen(false)}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest text-[16px]"
            href="#experience"
            onClick={() => setOpen(false)}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            className="p-2 pl-6 pr-6 rounded-lg transition ease-in-out hover:bg-white hover:text-black font-[300] uppercase tracking-widest text-[16px]"
            href="#projects"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
