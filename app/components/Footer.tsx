import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 bg-black text-white">
      <section className="ml-10 mr-10 flex flex-row max-sm:flex-col justify-between max-sm:space-y-5">
        <span className="flex">
          <p className="text-md">
            <span className="max-sm:hidden">© 2024 Ruben Christopher Arevalo. All rights reserved.</span>
            <span className="max-xl:hidden max-sm:block">© 2024 Ruben Christopher Arevalo. <br></br> All rights reserved.</span>
          </p>
        </span>
        <span>
          <ul className="flex flex-row items-center space-x-5">
            <li>
              <a
                href="https://github.com/rchrisarevalo"
                className="p-3 max-sm:p-0 rounded-lg font-extrabold max-sm:rounded-none transition ease-in-out hover:bg-white hover:text-black max-sm:hover:bg-transparent max-sm:hover:text-white"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rchrisarevalo"
                target="_blank"
                className="p-3 max-sm:p-0 rounded-lg font-extrabold max-sm:rounded-none transition ease-in-out hover:bg-white hover:text-black max-sm:hover:bg-transparent max-sm:hover:text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
