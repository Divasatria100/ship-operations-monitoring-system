import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShip } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#002B5B] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <FaShip className="text-[#00B4D8] text-2xl" />
            <span className="font-bold text-xl">SODIKAP</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-[#00B4D8] transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#00B4D8] transition-colors">
              About
            </Link>
            <Link to="/features" className="hover:text-[#00B4D8] transition-colors">
              Features
            </Link>
            <Link to="/contact" className="hover:text-[#00B4D8] transition-colors">
              Contact
            </Link>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-[#00B4D8] hover:bg-[#0096B7] rounded-md transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white rounded-md transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#002B5B] pb-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="hover:text-[#00B4D8] transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#00B4D8] transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/features"
              className="hover:text-[#00B4D8] transition-colors"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#00B4D8] transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-[#4D5E70]">
              <Link
                to="/login"
                className="px-4 py-2 bg-[#00B4D8] hover:bg-[#0096B7] rounded-md text-center transition-colors"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white rounded-md text-center transition-colors"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
