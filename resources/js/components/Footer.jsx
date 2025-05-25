import React from "react";
import { Link } from "react-router-dom";
import { FaShip, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <FaShip className="text-[#00B4D8] text-2xl" />
              <span className="font-bold text-xl">SODIKAP</span>
            </Link>
            <p className="text-[#dbdbdb] text-sm mt-2">
              Sistem informasi pemeliharaan kapal berbasis web yang dirancang untuk meningkatkan efisiensi dan efektivitas dalam proses pemeliharaan kapal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#00B4D8]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#dbdbdb] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#dbdbdb] hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-[#dbdbdb] hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#dbdbdb] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#00B4D8]">Features</h3>
            <ul className="space-y-2">
              <li className="text-[#dbdbdb]">Manajemen Pemeliharaan</li>
              <li className="text-[#dbdbdb]">Pencatatan & Pelacakan</li>
              <li className="text-[#dbdbdb]">Pemantauan Kondisi Kapal</li>
              <li className="text-[#dbdbdb]">Pelaporan & Analisis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#00B4D8]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#00B4D8]" />
                <span className="text-[#dbdbdb]">Jl. Ahmad Yani, Batam 29461</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-[#00B4D8]" />
                <span className="text-[#dbdbdb]">+62 778 469858</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-[#00B4D8]" />
                <span className="text-[#dbdbdb]">info@sodikap.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-[#00B4D8] hover:text-white transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#00B4D8] hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#00B4D8] hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#00B4D8] hover:text-white transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#4D5E70] mt-8 pt-6 text-center text-[#dbdbdb]">
          <p>© {new Date().getFullYear()} SODIKAP. All rights reserved.</p>
          <p className="text-xs mt-1">
            Program Studi Teknologi Rekayasa Perangkat Lunak, Politeknik Negeri Batam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
