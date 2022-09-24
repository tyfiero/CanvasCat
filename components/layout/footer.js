import React from "react";
import { FaGlobe, FaProductHunt, FaRobot, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <picture>
            <source srcSet="/bmc-g small.webp" type="image/webp" />
            <img
              src="/bmc-g small.webp"
              className="h-auto w-7"
              alt="bmc logo"
            />
          </picture>
          <span className="mx-3 text-xl">BMC Generator</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          © 2022 Ty Fiero —
          <a
            href="https://twitter.com/FieroTy"
            className="ml-1 text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            @FieroTy
          </a>
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a href="https://twitter.com/FieroTy" className="text-gray-500">
            <FaTwitter />
          </a>
          <a href="https://tyfiero.com" className="ml-3 text-gray-500">
            <FaGlobe />
          </a>
          <a
            href="https://www.producthunt.com/@tyfiero"
            className="ml-3 text-gray-500"
          >
            <FaProductHunt />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
