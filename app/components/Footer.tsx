import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 bg-black text-white">
      <section className="ml-10 mr-10 flex flex-row justify-between ">
        <span className="flex">
          <p className="text-md">
            (c) 2024 Ruben Christopher Arevalo. All rights reserved.
          </p>
        </span>
        <span>
          <ul className="flex flex-row items-center space-x-5">
            <li>
              <a
                href="https://github.com/rchrisarevalo"
                className="p-3 rounded-lg transition ease-in-out hover:bg-white hover:text-black"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rchrisarevalo"
                target="_blank"
                className="p-3 rounded-lg transition ease-in-out hover:bg-white hover:text-black"
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
