import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShip } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path ? "text-[#00B4D8]" : "text-white hover:text-[#00B4D8]";
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#002B5B]/95 backdrop-blur-sm shadow-lg py-2" 
          : "bg-[#002B5B] py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="SODIKAP Home"
          >
            <div className={`rounded-full p-2 bg-[#00B4D8]/10 transition-all duration-300 group-hover:bg-[#00B4D8]/20 ${
              scrolled ? "scale-90" : "scale-100"
            }`}>
              <FaShip className="text-[#00B4D8] text-2xl" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight group-hover:text-[#00B4D8] transition-colors">
              SODIKAP
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md transition-all duration-200 ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-md transition-all duration-200 ${isActive('/about')}`}
            >
              About
            </Link>
            <Link 
              to="/features" 
              className={`px-4 py-2 rounded-md transition-all duration-200 ${isActive('/features')}`}
            >
              Features
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-md transition-all duration-200 ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center ml-6 space-x-3">
            <Link
              to="/login"
              className="px-5 py-2 bg-[#00B4D8] hover:bg-[#0096B7] rounded-md transition-colors transform hover:scale-105 duration-200 text-white font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white rounded-md transition-all duration-200 transform hover:scale-105 font-medium"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-white"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
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

      {/* Mobile Menu - Slide Down Animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#002B5B] shadow-inner border-t border-[#4D5E70]/30 px-4 py-3">
          <div className="flex flex-col space-y-1">
            <Link
              to="/"
              className={`px-4 py-3 hover:bg-[#00B4D8]/10 hover:text-[#00B4D8] rounded-md transition-all ${location.pathname === '/' ? 'bg-[#00B4D8]/10 text-[#00B4D8]' : 'text-white'}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-3 hover:bg-[#00B4D8]/10 hover:text-[#00B4D8] rounded-md transition-all ${location.pathname === '/about' ? 'bg-[#00B4D8]/10 text-[#00B4D8]' : 'text-white'}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/features"
              className={`px-4 py-3 hover:bg-[#00B4D8]/10 hover:text-[#00B4D8] rounded-md transition-all ${location.pathname === '/features' ? 'bg-[#00B4D8]/10 text-[#00B4D8]' : 'text-white'}`}
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-3 hover:bg-[#00B4D8]/10 hover:text-[#00B4D8] rounded-md transition-all ${location.pathname === '/contact' ? 'bg-[#00B4D8]/10 text-[#00B4D8]' : 'text-white'}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-3 border-t border-[#4D5E70]/30 mt-2">
              <Link
                to="/login"
                className="px-4 py-3 bg-[#00B4D8] hover:bg-[#0096B7] rounded-md text-center transition-colors text-white font-medium"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-3 border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8]/10 rounded-md text-center transition-colors font-medium"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
