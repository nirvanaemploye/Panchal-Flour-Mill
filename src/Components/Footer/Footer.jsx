import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-xs text-gray-600 md:text-sm">
            © 2024 Panchal Flour Mill. All Rights Reserved.
          </p>
        </div>

        <ul className="flex gap-4 text-xs md:text-sm text-gray-500">
          <li className="hover:text-gray-800 cursor-pointer transition-colors duration-200">
            Contact
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition-colors duration-200">
            Privacy Policy
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
