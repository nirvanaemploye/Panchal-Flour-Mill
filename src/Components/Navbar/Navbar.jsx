import React, { useState } from "react";
import { LuSquareMenu, LuSquareX } from "react-icons/lu";
import { MdCall } from "react-icons/md";

const navbarData = [
  { id: 1, name: "Home" },
  { id: 2, name: "Services" },
  { id: 3, name: "About Us" },
  { id: 4, name: "Gallery" },
  { id: 5, name: "Visit Us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5] relative z-50">
      <div className="text-xl font-bold">Panchal Flour Mill</div>

      {/* Mobile toggle button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="transition-transform duration-300 ease-in-out text-3xl"
        >
          <div
            className={`transform transition duration-300 ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {menuOpen ? <LuSquareX /> : <LuSquareMenu />}
          </div>
        </button>
      </div>

      {/* Animated Nav Items */}
      <div
        className={`w-full md:flex md:items-center md:w-auto overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
        }`}
      >
        <ul className="flex flex-col items-center md:flex-row md:space-x-4 text-md">
          {navbarData.map((item) => (
            <li key={item.id} className="p-3 hover:text-blue-500">
              {item.name}
            </li>
          ))}
        </ul>

        {/* Call Button */}
        <div className="mt-4 md:mt-0 md:ml-4 flex justify-center">
          <a href="tel:+123">
            <div className="flex w-28 items-center justify-center h-10 rounded-md bg-[#c8a876] text-white font-medium p-2">
              <MdCall className="text-xl me-1" />
              Call Now
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
