import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Our Services", "About Us", "Testimonials"];

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 flex justify-center">
      <nav className="wrapper bg-gradient-to-br from-purple-200 via-white to-white border-2 border-black rounded-xl lg:rounded-full shadow-md px-6 py-3 max-h-20">
        <div className="flex items-center justify-between h-16">
          <div>
            <img
              src="/images/logo.png"
              alt="logo"
              className="lg:w-32 lg:h-32 w-20 h-20 max-h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-10">
            <ul className="hidden md:flex items-center gap-10 text-base font-medium text-gray-800">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-600 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <button className="hidden md:inline-block bg-purple-400 p-2 px-6 rounded-full hover:bg-white/50 transition">
              Contact
            </button>
          </div>

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
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-purple-600 transition"
                  >
                    {item}
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
