// src/components/Footer.jsx

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Tagline */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-blue-400">hookedBlogger</h1>
          <p className="text-sm text-gray-400">Code. Create. Connect.</p>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-6 text-sm mb-4 md:mb-0">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/contact-us" className="hover:text-blue-400 transition">Contact</a>
          <a href="/blogs" className="hover:text-blue-400 transition">Blogs</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} hookedBlogger. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
