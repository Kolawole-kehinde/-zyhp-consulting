import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../../constant/navItems";
import { Link } from "react-router";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 flex justify-center">
      <nav className="wrapper bg-gradient-to-br from-purple-200 via-white to-white border-2 border-black rounded-xl lg:rounded-full shadow-md px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src="/images/logo2.PNG" alt="logo" className="w-16 h-16 rounded-full" />
          </div>

          {/* Desktop Nav Items & Button */}
          <div className="flex items-center gap-10">
            <ul className="hidden md:flex items-center gap-10 text-base font-medium text-gray-800">
              {navItems?.map(({ id, name, path }) => (
                <li key={id}>
                  <a
                    href={path}
                    className="hover:text-purple-600 transition"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>

           <Link to="/contact">
            <button className="hidden md:block bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition">
              Contact us
            </button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/90 rounded-md shadow-md p-4">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              {navItems?.map(({ id, name, path }) => (
                <li key={id}>
                  <a
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-purple-600 transition"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
