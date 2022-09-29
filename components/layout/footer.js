import React from "react";
import { FaGlobe, FaProductHunt, FaRobot, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full text-gray-600 body-font print-nav">
      <div className="flex items-center w-full px-5 pb-2 mx-auto sm:pt-6 md:pt-8 md:flex-col sm:flex-row">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <picture>
            <source srcSet="/bmc-g small.webp" type="image/webp" />
            <img
              src="/bmc-g small.webp"
              className="h-auto w-7"
              alt="bmc logo"
            />
          </picture>
          <span className="mx-3 text-xl russo logo">CanvasCat</span>
        </a>
        <span className="inline-flex items-center justify-center mt-2 mb-2">
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
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-0 sm:border-gray-200 sm:py-2 sm:mt-0 lato">
          © 2022 Ty Fiero
          <a
            href="https://twitter.com/FieroTy"
            className="ml-1 text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          ></a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
