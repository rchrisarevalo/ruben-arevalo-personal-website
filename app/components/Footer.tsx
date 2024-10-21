import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 bg-black text-white">
      <section className="ml-10 mr-10 flex flex-row max-sm:flex-col justify-between max-sm:space-y-5">
        <span className="flex">
          <p className="text-md">
            <span>© 2024 Ruben Christopher Arevalo. All rights reserved.</span>
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
      <br></br>
      <section className="ml-10 mr-10" id="privacy">
        <span>
          <p className="font-bold">
            <u>Privacy Notice</u>
          </p>
          <i>
            To comply with privacy regulations, such as the <a 
            className="font-extrabold" href="https://www.oag.ca.gov/privacy/ccpa" target="_blank">
             <u>California Consumer Privacy Act (CCPA)</u>
            </a> and the <a
              className="font-extrabold" href="https://www.oag.state.va.us/consumer-protection/files/tips-and-info/Virginia-Consumer-Data-Protection-Act-Summary-2-2-23.pdf"
            >
              <u>Virginia Consumer Data Protection Act (VCDPA)</u>
            </a>, this notice will serve as a disclosure
            to visitors that this website uses Google Analytics and Vercel Analytics to collect anonymous user traffic
            data,
            which are used to determine the number
            of active users, new users, and event counts. If you decide to not allow your
            data to be collected, you can opt out by installing the <a
              href="https://chromewebstore.google.com/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh?hl=en&pli=1"
              target="_blank"
            >
              <u className="font-bold">Google Analytics Opt-out Add-on</u>
            </a> extension.
          </i>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
